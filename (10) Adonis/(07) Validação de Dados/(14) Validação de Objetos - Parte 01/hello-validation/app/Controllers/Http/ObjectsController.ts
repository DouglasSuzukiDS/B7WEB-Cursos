/* eslint-disable prettier/prettier */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'


export default class ObjectController {
   public async validateObjects(ctx: HttpContextContract) {
      const {request} = ctx

      const schemaObject = schema.create({
         id: schema.number(),
         name: schema.string(),
         
         
      })

      await request.validate({
         schema: schemaObject
      })
   
      return { success: true }
   }
}
