/* eslint-disable prettier/prettier */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'


export default class ExercisesController {
   public async Ex01(ctx: HttpContextContract) {
      /*
         - Username e Passowrd Obrigatórios;
         - A idade (age) do usuário tem que ser um number não pode ser menos do que 18;
         - Password deve ter entre 6 e 12 caracteres; 
         - Sex deve aceitar somente o tipo M (Masculino) e F (Feminino)
      */
      const { request } = ctx

      const schemaEx01 = schema.create({
         username: schema.string([
            rules.trim(),
            rules.required(),
            rules.alphaNum()
         ]),
         age: schema.number([
            rules.range(18, 500)
         ]),
         password: schema.string([
            rules.trim(),
            rules.required(),
            rules.alphaNum(),
            rules.minLength(6),
            rules.maxLength(12)
         ]),
         sex: schema.enum([
            rules.maxLength(1),
            'M', 'm', 'F', 'f'
         ])


      })

      const response = await request.validate({
         schema: schemaEx01
      })

      return { validated: 'Success', response }
   }

   public async Ex02(ctx: HttpContextContract) {
      /*
         - Username e Passowrd Obrigatórios;
         - O usuário tem que ter 18 anos ou mais (birthdate) (tipo date)
         - Passord deve ter entre 6 e 12 caracteres; 
         - Sex deve aceitar somente o tipo M (Masculino) e F (Feminino)
         - isAdmin deve aceitar somente os valores TRUE ou FALSE
         - O usuário não pode pertencer a rule 2 (rules: [1,3])
      */
      const { request } = ctx

      const schemaEx02 = schema.create({
         username: schema.string([
            rules.trim(),
            rules.alphaNum(),
            rules.required()
         ]),

         birthdate: schema.date(
            { format: 'dd/MM/yy' },
            [
               rules.after(18, 'years')
            ]
         ),

         password: schema.string([
            rules.trim(),
            rules.alphaNum(),
            rules.required(),
            rules.minLength(6),
            rules.maxLength(12)
         ]),

         sex: schema.enum([
            rules.maxLength(1),
            'M', 'm', 'F', 'f'
         ]),

         isAdmin: schema.boolean(),

         rule: schema.number([
            rules.notIn(
               ['2', 2]
            )
         ])
      })

      const response = await request.validate({
         schema: schemaEx02
      })

      return { valideted: 'Success', response }
   }

   public async Ex03(ctx: HttpContextContract) {
      /*
         Carrinho de compras chamado CART com pedidos de uma loja virtual

         Cada pedido debe ter pelo menos um item associado.

         O prazo de entrega informado deve ser de pelo menos cinco dias apos a data do pedido

         - O carrinho deve ter um endereço de entrega cadastrado
         - O carrinho deve ter um usuário associado
         - Cada item deve ter um ID, a lista de possiveis IDS são [1, 2, 3, 4 ,7 ,12 , 122]
         - O ip do usuário deve ser salvo no carrinho
      */

      const { request } = ctx

      const schemaEx03 = schema.create({
         cart: schema.object().members({
            itemsQty: schema.number( [ rules.notIn(['0', 0]) ] ),

            requestDate: schema.date( { format: 'dd/MM/yyyy' } ),

            deadline: schema.date({ format: 'dd/MM/yyyy' }, [
               rules.after(5, 'days')
            ]),

            address: schema.string([
               rules.trim(),
               rules.alphaNum(),
            ]),

            user: schema.string([ 
               rules.trim(),
               rules.alphaNum()
            ]),

            id: schema.enum([1, 2, 3, 4 ,7 ,12 , 122]),

            ip: schema.string([
               rules.ip()
            ])
         }),
         // anys: schema.array().anyMembers()

      })

      const response = await request.validate({
         schema: schemaEx03
      })

      return { valideted: 'Success', response }
   }

}


