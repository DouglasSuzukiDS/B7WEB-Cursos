/* eslint-disable prettier/prettier */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'


export default class NumbersController {
   public async validateNumber(ctx: HttpContextContract) {
      const {request} = ctx

      const validateSchema = schema.create({
         // value: schema.number()
         value: schema.number([
            rules.range(10, 100) // Apenas valores entre esses numeros
         ])
      })

      await request.validate({
         schema:validateSchema
      })
   
      return { success: true }
   }
}
