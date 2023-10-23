import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Categorie from 'App/Models/Categorie'
import User from 'App/Models/User'

export default class CategoriesController {
  public async index({}: HttpContextContract) {
    // Exibe todas as categoria
    let categories = await Categorie.all()
    return categories
  }

  public async store({ request, auth }: HttpContextContract) {
    // Cria uma nova categoria
    let data = request.only(['title', 'color'])
    let user = auth.user!

    let newCategory = Categorie.create({...data, userId: user.id})

    return newCategory
  }

  public async show({ request, auth, response }: HttpContextContract) {
    // Exibe informações de uma categoria específica
    let { id } = request.params()

    let categorie = await Categorie.findOrFail(id)

    if(categorie.userId != auth.user!.id) {
      return response.status(401)
    }

    await categorie.preload('user')
    
    return categorie
  }

  public async update({ request, auth, response }: HttpContextContract) {
    // Altera uma categoria
    let { id } = request.params()
    let data = request.only(['title', 'color'])

    let categorie = await Categorie.findOrFail(id)

    if(categorie.userId != auth.user!.id) {
      return response.status(401)
    }
    
    categorie.merge(data)
    await categorie.save()

    return categorie
  }

  public async destroy({ request, auth, response }: HttpContextContract) {
    // Delete uma categoria

    let { id } = request.params()
    let categorie = await Categorie.findOrFail(id)
    
    if(categorie.userId != auth.user!.id) {
      return response.status(401)
    }

    await categorie.delete()

    return { success: true }
  }
}
