/* eslint-disable prettier/prettier */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

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

   public async validateStringWithRules(ctx: HttpContextContract) {
      let { request } = ctx

      const rulesSchema = schema.create({
         // Permitir apenas caracteres alpha (Alfabeto)
         alpha: schema.string([
            rules.alpha()
         ]),

         // Permitir apenas caracteres alphaNumericos 
         alphaNum: schema.string([
            rules.alphaNum()
         ]),

         // Validar o tamanho da String
         strlenMin: schema.string([
            rules.minLength(3)
         ]),

         strlenMax: schema.string([
            rules.maxLength(5)
         ]),

         // É possível fazer váras validaões ao mesmo tempo
         strlen: schema.string([
            rules.minLength(3),
            rules.maxLength(5)
         ]),

         // Retirar espaços em branco do inicio e no fim de uma string
         trim: schema.string([
            rules.trim()
         ]),

         // Escapa caracteres especiais para evitar SQLInjection
         escape: schema.string([
            rules.escape()
         ]),

         // Verifica se é um IP valido
         ip: schema.string([
            rules.ip()
         ]),

         // Verificar se determinado dado é um Email
         email: schema.string([
            rules.email()
         ])
      })

      await request.validate({
         schema: rulesSchema
      })

      return { response: 'success' }
   }

   public async validateStringWithDatabase(ctx: HttpContextContract) {
      let { request } = ctx

      const rulesSchema = schema.create({
         name: schema.string(),
         // Verifica se o email é unico
         email: schema.string({}, [
            rules.email(),
            rules.unique({table: 'users', column: 'email'})
         ]),
         // Verifica se o usuário de indicação existe
         affiliateEmail: schema.string({}, [
            rules.exists({table: 'users', column: 'email'})
         ]),
         // Ele vai verificar bucando [campo]_confirmation
         password: schema.string({}, [
            rules.required(),
            rules.minLength(6),
            rules.maxLength(255),
            rules.confirmed() // Confirmação do campo
         ])
      })

      await request.validate({
         schema:rulesSchema
      })

      return { success: true }
   }

   public async validateStringWithEquals(ctx: HttpContextContract) {
      const {request} = ctx

      const validateSchema = schema.create({
         // Verifica se o usuário é igual
         username: schema.string({}, [
            rules.equalTo('Shanks')
         ]),
         // Verifica se o campo type NÃO É igual a determinado valor
         type: schema.string({}, [
            rules.notIn(['ADMIN', 'TESTER'])
         ])
      })

      await request.validate({
         schema:validateSchema
      })
   
      return { success: true }
   }

}

/*public async validateStringWiths(ctx: HttpContextContract) {
   const {request} = ctx

   const validateSchema = schema.create({
      username: schema.string({}, [])
   })

   await request.validate({
      schema:validateSchema
   })

   return { success: true }
}*/

