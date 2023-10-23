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

  public async store({ request, auth }: HttpContextContract) {
    let user = auth.user!

    let data = request.only(['title', 'description', 'due_date', 'is_done', 'categorieId'])

    let category = await Categorie.find(data.categorieId)
    
    if(!category || (category.userId != user.id) ) {
      return { message: 'Categoria Inválida' }
    }

    let newCategory = await Task.create({ ...data, userId: user.id })

    let newCategoryJson = newCategory.toJSON() // Busca os dados em memoria

    return {...newCategoryJson, categorie: category}
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

    task.merge(data) // Faz o update dos dados
    await task.save()
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
