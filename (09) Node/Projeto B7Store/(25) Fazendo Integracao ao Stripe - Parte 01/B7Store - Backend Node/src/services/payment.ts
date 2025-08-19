import { CartItem } from "../types/cart"

type CreatePaymentLinkParams = {
   cart: CartItem[]
   shippingCost: number
   orderId: number
}

export const createPaymentLink = async({ cart, shippingCost, orderId }: CreatePaymentLinkParams) => {
   
}