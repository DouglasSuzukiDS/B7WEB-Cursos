import React from "react"
import { CartArea, CartBody, CartHeader, CartIcon, CartText, ProductInfoArea, ProductName, ProductPhoto, ProductPrice, ProductQuantityArea, ProductsArea, ProductsItem } from "./styled"
import { useSelector } from "react-redux"
import { useState } from "react"

export const Cart = () => {
   const products = useSelector(state => state.cart.products)

   const [show, setShow] = useState(true)

   const handleCartClick = () => {
      setShow(!show)
   }

   return (
      <CartArea>
         <CartHeader onClick={handleCartClick}>
            <CartIcon src="/assets/cart.png" />

            <CartText>Meu Carrinho ({products.length})</CartText>

            {show &&
               <CartIcon src='/assets/down.png' />
            }

         </CartHeader>

         <CartBody show={show}>
            <ProductsArea>

            { products.map((item, index) => (
               <ProductsItem>
                  <ProductPhoto src={ item.image } />

                  <ProductInfoArea>
                     <ProductName>
                        { item.name }
                     </ProductName>

                     <ProductPrice>
                        R$ { (item.price).toFixed(2) }
                     </ProductPrice>
                  </ProductInfoArea>

                  <ProductQuantityArea>
                     { item.qt }
                  </ProductQuantityArea>

               </ProductsItem>
            ))}

            </ProductsArea>

         </CartBody>
      </CartArea>
   )
}