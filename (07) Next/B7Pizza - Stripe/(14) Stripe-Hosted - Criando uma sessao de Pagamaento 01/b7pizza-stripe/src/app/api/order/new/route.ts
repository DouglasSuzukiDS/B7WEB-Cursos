import { stripe } from "@/lib/stripe"
import { getLoggedUserFromHeader } from "@/services/auth"
import { createNewOrder } from "@/services/order"
import { headers } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
   const headersList = await headers()
   const origin = headersList.get('origin') // Pega a url de origem da requisição

   const { cart } = await request.json()
   const loggedUser = await getLoggedUserFromHeader()

   // console.log('Cart: ', cart)
   // console.log('Logged: ', loggedUser)

   if (!loggedUser) return NextResponse.json({ error: 'Usuário não logado' })

   if (!cart || (cart.length <= 0)) return NextResponse.json({ error: 'Carrinho vazio' })

   const order = createNewOrder(loggedUser.id, cart)

   if (!order) return NextResponse.json({ error: 'Ocorreu um erro' })
   console.log(origin)
   // Medoto de pagamento
   const paymentSession = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      success_url: `${origin}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}`,
      line_items: [
         {
            price_data: {
               currency: 'brl',
               unit_amount: 100, // Valor em centavos
               product_data: {
                  name: 'Produto de Teste',
                  description: 'Descrição do produto de teste'
               }
            },
            quantity: 1
         },
         {
            price_data: {
               currency: 'brl',
               unit_amount: 12345, // Valor em centavos
               product_data: {
                  name: 'Produto de Teste 2',
               }
            },
            quantity: 2
         }
      ]
   })

   return NextResponse.json({ order, url: paymentSession.url }, { status: 201 })
}