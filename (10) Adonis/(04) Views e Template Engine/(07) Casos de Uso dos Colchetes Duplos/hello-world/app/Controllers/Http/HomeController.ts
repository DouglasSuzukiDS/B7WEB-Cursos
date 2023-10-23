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

         /*usuarios: [
            {
               nome: 'Shanks',
               tecnologias: ['HTML', 'CSS', 'Javascript'],
               admin: true

            },
            {
               nome: 'Kaido',
               tecnologias: ['Javascript', 'PHP', 'Python'],
               admin: true
            },
            {
               nome: 'Bigmon',
               tecnologias: ['MySQL', 'Mongo'],
               admin: false
            }

         ]*/

         variavel: 'Minha Variável',
         getUser: async() => { return 'User' },
         script: "<script>alert('test')</script>"
      }

      return view.render('Homepage', dados)
   }

   async sobre() {
      return 'Sobre nós'
   }
}
