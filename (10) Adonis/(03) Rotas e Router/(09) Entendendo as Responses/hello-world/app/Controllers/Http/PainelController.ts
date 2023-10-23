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

   /*async index({request, response}) {
      response.send({ //http://localhost:3333/api/painel/?idade=123&sex=masc
         response: 'Index do Painel',
         // headers: request.headers(),
         language: request.language(), // Linguagens preferidas do usuário 
         method: request.method(), 
         ip: request.ip(),
         ips: request.ips(), // Possiveis IPs que o usuario pode estar utilizando
         qs: request.qs(), // Query String
         url: request.url(), // /api/painel
         completeUrl: request.completeUrl(), // URL Completa
         all: request.all(), // Retorna os campos de forms
         only: request.only('idade'), // Retorna apenas o campo
         except: request.except('[idade]'), // Retorna todos menos o parametro informado 
      })
   }*/

   async index({response}) {
      let json = { hello: 'World' }

      response
         // .status(201)
            // 404 => Não Encontrado
            // 201 => Created
            // 200 => Sucesso
         // .send(json)
         .redirect().toPath('/api/painel/usuarios/1')
         // .download() // Obriga o navegador baixar um arquivo
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
