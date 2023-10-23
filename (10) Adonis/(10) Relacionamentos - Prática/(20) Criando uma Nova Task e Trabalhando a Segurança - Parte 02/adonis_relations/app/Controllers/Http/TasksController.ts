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

  public async show({}: HttpContextContract) {

  }

  public async update({}: HttpContextContract) {

  }

  public async destroy({}: HttpContextContract) {
    
  }
}
