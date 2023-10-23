import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
   /*async index(ctx: HttpContextContract) {
      // console.log(ctx)
      // return view.render('Homepage')
      return ctx.view.render('painel/Homepage')
   }*/

   async index({view}) {
      return view.render('painel/Homepage')
   }

   async sobre() {
      return 'Sobre nós'
   }
}
