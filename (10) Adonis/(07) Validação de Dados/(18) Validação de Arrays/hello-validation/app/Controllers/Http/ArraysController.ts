/* eslint-disable prettier/prettier */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'


export default class ArrayController {
   public async validateArrays(ctx: HttpContextContract) {
      const {request} = ctx

      const schemaArray = schema.create({
         numbers: schema.array().members(schema.number()),
         strings: schema.array().members(schema.string()),
         objects: schema.array().members(schema.object().members({
            name: schema.string(),
            age: schema.number()
         })),
         anys: schema.array().anyMembers()

      })

      await request.validate({
         schema: schemaArray
      })
   
      return { response: 'success' }
   }

}

   
