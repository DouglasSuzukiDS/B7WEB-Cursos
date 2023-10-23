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
            format: 'dd/MM/yyyy'
         }, [
            // Verifica se a data é depois de hoje
            // rules.after('today') 

            // Verifica se a data é antes de hoje
            // rules.before('today') 

            // Verifica se a data é inferior há 1 ano
            // rules.before(1, 'year') 

            // Verifica se a data é inferior há 10 dias
            // rules.before(10, 'days') 

            // Verifica se a data é superior há 10 dias
            // rules.after(10, 'days') 

            rules.before(-10, 'days') 
         ])
      })

      await request.validate({
         schema:validateSchema
      })
   
      return { success: true }
   }
}
