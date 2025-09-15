'use server'

import { CartItem } from "@/types/cart-item"

export const finishCart = async (token: string, addressIs: number, cart: CartItem[]) => {
   // Todo: Requisição para finalizar compra e gerar URL de pagamento
   return null
}