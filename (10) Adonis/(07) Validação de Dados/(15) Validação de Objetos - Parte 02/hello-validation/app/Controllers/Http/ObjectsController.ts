/* eslint-disable prettier/prettier */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'


export default class ObjectController {
   public async validateObjects(ctx: HttpContextContract) {
      const {request} = ctx

      const schemaObject = schema.create({
         user: schema.object().members({
            id: schema.number(),
            name: schema.string(),
         }),

         address: schema.object().members({
            city: schema.string(),
            state: schema.string()
         }),
         
         status: schema.string()
      })

      await request.validate({
         schema: schemaObject
      })
   
      return { response: 'success' }
   }
}
