/* eslint-disable prettier/prettier */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

enum UserTypes {
   ADMIN = 'ADMIN',
   USER = 'USER'
}

export default class EnumsController {
   public async validateEnum(ctx: HttpContextContract) {
      const {request} = ctx

      const validateSchema = schema.create({
         // Sem usar Tipagem
         // value: schema.enum(['ADMIN', 'USER'] as const) // Valores definidos

         // Com tipagem
         value: schema.enum(Object.values(UserTypes))
      })

      await request.validate({
         schema:validateSchema
      })
   
      return { success: true }
   }
}
