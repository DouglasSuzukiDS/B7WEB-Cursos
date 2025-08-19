import Stripe from "stripe"
import { getProduct } from "../services/products"
import { CartItem } from "../types/cart"
import { getStripeSecretKey } from "../utils/get-stripe-secret-key"
import { getFrontendUrl } from "../utils/get-frontend-url"
import { raw } from "@prisma/client/runtime/library"

export const stripe = new Stripe(getStripeSecretKey())

type createStripeCheckoutSessionParams = {
   cart: CartItem[]
   shippingCost: number
   orderId: number
}

export const createStripeCheckoutSession = async ({ cart, shippingCost, orderId }: createStripeCheckoutSessionParams) => {
   let stripeLineItems = []

   for (let item of cart) {
      const product = await getProduct(item.productId)

      if (product) {
         stripeLineItems.push({
            price_data: {
               product_data: {
                  name: product.label
               },
               currency: "BRL",
               unit_amount: Math.round(product.price * 100),
            },
            quantity: item.quantity
         })
      }
   }

   if (shippingCost > 0) {
      stripeLineItems.push({
         price_data: {
            product_data: {
               name: "Frete",
            },
            currency: "BRL",
            unit_amount: Math.round(shippingCost * 100),
         },
         quantity: 1
      })
   }

   const session = await stripe.checkout.sessions.create({
      line_items: stripeLineItems,
      mode: 'payment',
      metadata: { orderId: orderId.toString() },
      success_url: `${getFrontendUrl()}/cart/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${getFrontendUrl()}/my-orders`
   })

   return session
}

export const getConstructEvent = async (rawBody: string, sig: string, webhookKey: string) => {
   try {
      return stripe.webhooks.constructEvent(rawBody, sig, webhookKey)
   } catch {
      return null
   }
}