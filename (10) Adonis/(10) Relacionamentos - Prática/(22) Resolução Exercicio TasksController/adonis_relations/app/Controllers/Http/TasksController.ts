import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Categorie from 'App/Models/Categorie'
import Task from 'App/Models/Task'

export default class TasksController {
  public async index({ auth }: HttpContextContract) {
    let tasks = await Task.query().where({
      userId: auth.user!.id
    })

    return tasks
  }

  public async store({ request, auth, response }: HttpContextContract) {
    let user = auth.user!

    let data = request.only(['title', 'description', 'due_date', 'is_done', 'categorieId'])

    let category = await Categorie.find(data.categorieId)
    
    if(!category || (category.userId != user.id) ) {
      return { message: 'Categoria Inválida' }
    }

    if(data.description.length > 100) {
      response.status(400)
      return { erro: 'Description aceita até 100 caracteres' }
    }

    let newTask = await Task.create({ ...data, userId: user.id })

    let newTaskJson = newTask.toJSON() // Busca os dados em memoria

    return {...newTaskJson, categorie: category}
  }

  public async show({ params, response, auth }: HttpContextContract) {
    let { id } = params

    let task = await Task.find(id)

    if(!task || (task.userId != auth.user!.id)) {
      response.status(404)
      return { erro: 'Task não existe' }
    }

    await task.preload('categorie')
    await task.preload('user')

    return task
  }

  public async update({ params, auth, response, request }: HttpContextContract) {
    let { id } = params

    let task = await Task.find(id)

    if(!task || (task.userId != auth.user!.id)) {
      response.status(404)
      return { erro: 'Task não existe' }
    }

    let data = request.only(['title', 'description', 'due_date', 'is_done', 'categorieId'])

    // Validar a Description com até 100 Caracteres
    if(data.description && data.description.length > 100) {
      response.status(400)
      return { erro: 'Description aceita até 100 caracteres' }
    }

    // My solution
    /*if(data.description.length > 100) { // My resolution
      return { description: 'A descrição precisa ser menos que 100 caracteres' }
    }*/

    // Validar se o due_date é uma data válida
    if(data.due_date && new Date(data.due_date).toString() == 'Invalid Date') {
      response.status(400)
      return { erro: 'Data Inválida' }
    }

    // Validar se o is_done é um boolean válido
    let validBooleans = ['1', '0', 1, 0, true, false]

    if(data.is_done && (!validBooleans.includes(data.is_done))) {
      response.status(400)
      return { erro: 'id_done precisa ser Booleado' }
    }

    // My solution
    /*if(
      (typeof data.is_done != 'boolean') && 
      (data.is_done != 0 || data.is_done != '0') && 
      (data.is_done != 1 || data.is_done != '1')
    ) {
      return { value: 'Valor inválido para is_done' }
    }*/

    task.merge(data) // Faz o update dos dados
    await task.save()
    await task.refresh() 
    return task
  }

  public async destroy({params, auth, response}: HttpContextContract) {
    let { id } = params

    let task = await Task.find(id)

    if(!task || (task.userId != auth.user!.id)) {
      response.status(404)
      return { erro: 'Task não existe' }
    }

    await task.delete()
    response.status(200)
    return { success: true }
  }
}
