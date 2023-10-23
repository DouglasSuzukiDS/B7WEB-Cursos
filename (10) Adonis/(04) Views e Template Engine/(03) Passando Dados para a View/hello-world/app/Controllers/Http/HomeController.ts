import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
   /*async index(ctx: HttpContextContract) {
      // console.log(ctx)
      // return view.render('Homepage')
      return ctx.view.render('painel/Homepage')
   }*/

   async index({view}) {
      /*return view.render('Homepage', {
         usuario: 'Shanks',
         idade: 35,
         apelido: 'O Ruivo'
      })*/

      let dados = {
         /*usuario: 'Shanks',
         idade: 35,
         apelido: 'O Ruivo'*/

         usuario: {
            nome: 'Shanks',
            idade: 35,
            apelido: 'O Ruivo',
         }
      }

      return view.render('Homepage', dados)
   }

   async sobre() {
      return 'Sobre nós'
   }
}
