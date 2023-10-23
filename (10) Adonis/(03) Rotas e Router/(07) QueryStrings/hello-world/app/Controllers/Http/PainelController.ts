// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelController {
   protected users = [
      {
         id: 1,
         slug: 'Ruivo',
         name: 'Shanks'
      },
      {
         id: 2,
         slug: 'BigMom',
         name: 'Chalotte Linlin'
      },
   ]

   async index({request}) {
      return { //http://localhost:3333/api/painel/?idade=123&sex=masc
         response: 'Index do Painel',
         qs: request.qs() // Query String
      }
   }


   async admin() {
      return { response: 'Rota Admin'}
   }

   async usuarioById({params}) {
      if(!params['id']) {
         return { users: this.users }
      } 

      let myRequestedUserId = params['id'] // A palavra passada na rota
      //return myRequestedUserId

      let myUser = this.users.find(user => user.id == myRequestedUserId)

      if(myUser) {
         return myUser
      } else {
         return { error: 'Nenhum usuário encontrado' }
      }
   }

   async usuarioBySlug({params}) {
      let myRequestedSlug = params['slug'] // A palavra passada na rota
      //return myRequestedUserId

      let myUser = this.users.find(user => user.slug == myRequestedSlug)

      if(myUser) {
         return myUser
      } else {
         return { error: 'Nenhum usuário encontrado' }
      }
   }

   async docs({params}) { // Captura o parametro e amarzena no array
      return params['*'][2]
   }
}
