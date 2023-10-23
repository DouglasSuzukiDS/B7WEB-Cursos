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

   async index() {
      return { response:  'Index do Painel'}
   }

   async usuarios() {
      return {
         user: this.users
      }
   }

   async admin() {
      return { response: 'Rota Admin'}
   }

   async usuarioById({params}) {
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
}
