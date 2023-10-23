/* eslint-disable prettier/prettier */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'


export default class DatesController {
   public async validateDates(ctx: HttpContextContract) {
      const {request} = ctx

      const validateSchema = schema.create({
         // AAAA-MM-DD
         date: schema.date({
            // Formado padrão de data do Adonis
            // format: 'yyyy-MM-dd'

            // format: 'dd-MM-yyyy'

            // format: 'dd/MM/yyyy'

            // Formato padrão BR
            format: 'dd/MM/yyyy HH:mm:ss'
         })
      })

      await request.validate({
         schema:validateSchema
      })
   
      return { success: true }
   }
}
