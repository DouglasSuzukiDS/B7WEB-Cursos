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

   const order = await createNewOrder(loggedUser.id, cart)

   if (!order) return NextResponse.json({ error: 'Ocorreu um erro' })

   const paymentItems = []

   for (let item of order.orderProducts) {
      paymentItems.push({
         price_data: {
            currency: 'brl',
            unit_amount: parseFloat(item.product.price.toString()) * 100, // Valor em centavos
            product_data: {
               name: item.product.name
            }
         },
         quantity: item.quantity
      })
   }

   // Medoto de pagamento
   const paymentSession = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'], // Inserido pq se nao informar da erro na requisição
      success_url: `${origin}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}`,
      line_items: paymentItems,
      customer_email: loggedUser.email, // Email do cliente
      shipping_options: [
         {
            shipping_rate_data: {
               display_name: 'Frete padrão',
               type: 'fixed_amount',
               fixed_amount: {
                  currency: 'brl',
                  amount: 1000 // Valor do frete em centavos (R$10,00)
               }
            }
         }
      ],
      metadata: {
         order_id: order.id
      }
   })

   return NextResponse.json({ order, url: paymentSession.url }, { status: 201 })
}