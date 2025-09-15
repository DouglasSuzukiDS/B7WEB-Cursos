'use client'

import { clearCartCookie } from "@/actions/clear-cart-cookie"
import { finishCart } from "@/actions/finish-cart"
import { useAuthStore } from "@/store/auth"
import { useCartStore } from "@/store/cart"
import Link from "next/link"
import { redirect } from "next/navigation"

export const FinishPurchaseButton = () => {
   const { token, hydrated } = useAuthStore(state => state)
   const cartStore = useCartStore(state => state)

   const handleFinishButton = async () => {
      if (!token || !cartStore.selectedAddressId) return

      const sessionUrl = await finishCart(token, cartStore.selectedAddressId, cartStore.cart)

      if (sessionUrl) {
         await clearCartCookie()

         cartStore.clearCart()

         redirect(sessionUrl)
      } else {
         alert('Ocorre um erro')
      }
   }

   if (!hydrated) return null

   if (!token) {
      return (
         <Link
            href={'/login'}
            className="block w-full px-6 py-5 bg-blue-600 text-white text-center  border-0 rounded-sm">
            Faça login para finalizar
         </Link>
      )
   }

   return (
      <button
         className="cursor-pointer w-full px-6 py-5 bg-blue-600 text-white text-center  border-0 rounded-sm disabled:opacity-20"
         onClick={handleFinishButton}
         disabled={!cartStore.selectedAddressId ? true : false}>
         Finalizar
      </button>
   )
}