import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
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

    let newCategory = await Task.create({ ...data, userId: user.id })

    return newCategory
  }

  public async show({}: HttpContextContract) {

  }

  public async update({}: HttpContextContract) {

  }

  public async destroy({}: HttpContextContract) {
    
  }
}
