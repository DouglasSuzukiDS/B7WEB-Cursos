// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
   async index({view}) {
      // return 'Hello World'
      return view.render('Welcome')
   }

   async sobre() {
      return 'Sobre nós'
   }
}
