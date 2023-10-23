/* eslint-disable prettier/prettier */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class StringsController {
   public async validateString(ctx: HttpContextContract) {
      // Desestruturando ctx para pegar o ctx.request()
      let {request} = ctx

      // Criand o schema de Validação
      let schemaString = schema.create({
         // Verifica se um dado é ou não uma string
         isString: schema.string(),

         // Verifica se é uma String mais deixa opcional
         stringOptional: schema.string.optional(),

         // Verifica se é uma string mais aceita valor null
         stringNull: schema.string.nullable(),

         // Verifica se é uma string, aceitando null e opcional
         stringNullAndOptional: schema.string.nullableAndOptional(),
      })

      await request.validate({
        schema: schemaString,
      })

      return { response: 'success' }
   }

   
}
