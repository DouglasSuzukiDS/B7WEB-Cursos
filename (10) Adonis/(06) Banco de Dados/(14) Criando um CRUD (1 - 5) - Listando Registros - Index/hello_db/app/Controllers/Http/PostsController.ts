import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {

   async index({}: HttpContextContract) {
      let allPosts = await Post.all()
      return allPosts
   }

   store({request}: HttpContextContract) {
      return{ store: 'Also works' }
   }

}
