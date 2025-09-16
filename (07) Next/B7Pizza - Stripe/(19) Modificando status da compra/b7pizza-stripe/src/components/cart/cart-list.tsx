'use client'

import { useCart } from "@/stores/cart"
import { Button } from "../ui/button"
import { useProducts } from "@/stores/products"
import { useEffect, useState } from "react"
import { CartProduct } from "./cart-product"
import { decimalToMoney } from "@/lib/utils"
import { useAuth } from "@/stores/auth"
import { apithWithAuth } from "@/lib/axios"

export const CartList = () => {
   const auth = useAuth()
   const cart = useCart()
   const products = useProducts()

   const [subtotal, setSubtotal] = useState(0)
   const [shippingCoast, setShippingCost] = useState(10)

   const calculateSubtotal = () => {
      let sub = 0

      for (let item of cart.items) {
         let prod = products.products.find(pitem => pitem.id === item.productId)

         if (prod) sub += item.quantity * parseFloat(prod.price.toString())
      }

      setSubtotal(sub)
   }

   const handleFinish = async () => {
      if (cart.items.length > 0) {
         const orderReq = await apithWithAuth.post('/order/new', {
            cart: cart.items
         })

         if(orderReq.status === 201) {
            window.location.href = orderReq.data.url
         }
      }

      // Pega os dados do pedido e faz alguma coisa
   }

   useEffect(() => {
      calculateSubtotal()
   }, [cart])

   return (
      <>
         <div className="felx flex-col gap-3 my-5">
            {cart.items.map(item => (
               <CartProduct
                  key={item.productId}
                  data={item}
               />
            ))}
         </div>

         <div className="my-4 text-right">
            <div>Sub-total: {decimalToMoney(subtotal)}</div>

            <div>Frete: {decimalToMoney(shippingCoast)}</div>

            <div className="font-bold">Total: {decimalToMoney(subtotal + shippingCoast)}</div>
         </div>

         {auth.token &&
            <Button
               onClick={handleFinish}
               className="bg-green-700 hover:bg-green-900">Finalizar compra</Button>}

         {!auth.token &&
            <Button
               onClick={() => auth.setOpen(true)}>Login / Cadastro</Button>
         }

      </>
   )
}