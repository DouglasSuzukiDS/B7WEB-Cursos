// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelController {
   async index() {
      return 'Index do Painel'
   }

   async usuarios() {
      return 'Usuários do Painel'
   }
}
