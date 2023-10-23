import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CategoriesController {
  public async index({}: HttpContextContract) {
    // Exibe todas as categoria
  }

  public async store({}: HttpContextContract) {
    // Cria uma nova categoria
  }

  public async show({}: HttpContextContract) {
    // Exibe informações de uma categoria específica
  }

  public async update({}: HttpContextContract) {
    // Altera uma categoria
  }

  public async destroy({}: HttpContextContract) {
    // Delete uma categoria
  }
}
