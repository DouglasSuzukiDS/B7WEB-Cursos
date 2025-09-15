'use client'

import { getAuthState } from "@/actions/get-auth-state"
import { getCartState } from "@/actions/get-cart-state"
import { useAuthStore } from "@/store/auth"
import { useCartStore } from "@/store/cart"
import { useEffect } from "react"

export const StoreHydration = () => {
   const authStore = useAuthStore()

   useEffect(() => {
      // Hydrate auth auth
      getAuthState()
         .then(({ token }) => {
            if (token) useAuthStore.setState({ token })

            authStore.setHydrated(true)
         })

      // Hydrate cart state
      getCartState()
         .then(({ cart }) => {
            if (cart.length > 0) {
               useCartStore.setState({ cart })
            }
         })
   }, [])

   return null
}