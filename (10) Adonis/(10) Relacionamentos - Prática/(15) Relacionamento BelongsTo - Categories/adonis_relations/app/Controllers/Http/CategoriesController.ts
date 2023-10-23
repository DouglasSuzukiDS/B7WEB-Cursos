import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Categorie from 'App/Models/Categorie'

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

  public async show({ request }: HttpContextContract) {
    // Exibe informações de uma categoria específica
    let { id } = request.params()

    let categorie = await Categorie.findOrFail(id)
    await categorie.preload('user')
    return categorie
  }

  public async update({}: HttpContextContract) {
    // Altera uma categoria
  }

  public async destroy({}: HttpContextContract) {
    // Delete uma categoria
  }
}
