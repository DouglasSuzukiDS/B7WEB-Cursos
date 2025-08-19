import Stripe from "stripe"
import { getProduct } from "../services/products"
import { CartItem } from "../types/cart"
import { getStripeSecretKey } from "../utils/get-stripe-secret-key"

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
}