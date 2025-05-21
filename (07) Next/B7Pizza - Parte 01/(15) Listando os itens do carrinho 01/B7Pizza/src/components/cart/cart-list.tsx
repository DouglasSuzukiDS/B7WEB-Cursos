'use client'

import { useCart } from "@/stores/cart"
import { Button } from "../ui/button"
import { useProducts } from "@/stores/products"
import { useState } from "react"

export const CartList = () => {
   const cart = useCart()
   const products = useProducts()

   const [subtotal, setSubtotal] = useState(0)
   const [shippingCoast, setShippingCost] = useState(10)

   return (
      <>
         <div className="felx flex-col gap-3 my-5">
            --
         </div>

         <div>
            <div>Sub-total: </div>

            <div>Frete: </div>

            <div>Total: </div>
         </div>

         <Button>Finalizar compra</Button>
      </>
   )
}