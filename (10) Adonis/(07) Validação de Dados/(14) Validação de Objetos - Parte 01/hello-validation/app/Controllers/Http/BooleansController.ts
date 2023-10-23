/* eslint-disable prettier/prettier */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'


export default class BooleanController {
   public async validateBoolean(ctx: HttpContextContract) {
      const {request} = ctx

      const validateSchema = schema.create({
         // Valida dados do Tipo Boolean
         /*
            Aceita: 
               - true | false
               - "true" | "false"
               - "1" | "0"
               - 1 | 0
         */
         value: schema.boolean()
      })

      await request.validate({
         schema:validateSchema
      })
   
      return { success: true }
   }
}
