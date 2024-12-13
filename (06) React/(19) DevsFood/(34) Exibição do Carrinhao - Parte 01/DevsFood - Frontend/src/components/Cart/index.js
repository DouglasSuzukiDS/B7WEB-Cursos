import React from "react"
import { CartArea, CartBody, CartHeader, CartIcon, CartText } from "./styled"
import { useSelector } from "react-redux"
import { useState } from "react"

export const Cart = () => {
   const products = useSelector(state => state.cart.products)

   const [show, setShow] = useState(false)

   const handleCartClick = () => {
      setShow(!show)
   }
   
   return(
      <CartArea>
         <CartHeader onClick={ handleCartClick }>
            <CartIcon src="/assets/cart.png" />

            <CartText>Meu Carrinho ({ products.length })</CartText>

            { show &&
               <CartIcon src='/assets/down.png' />
            }

         </CartHeader>

         <CartBody show={ show }>
            <div style={{ width: 50, height: 300, backgroundColor: 'red' }}></div>
         </CartBody>
      </CartArea>
   )
}