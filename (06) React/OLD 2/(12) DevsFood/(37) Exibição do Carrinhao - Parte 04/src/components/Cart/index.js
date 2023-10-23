import React from "react"
import { CartArea, CartBody, CartHeader, CartIcon, CartText, ProductInfoArea, ProductName, ProductPhoto, ProductPrice, ProductQtIcon, ProductQtMinus, ProductQtPlus, ProductQtText, ProductQuantityArea, ProductsArea, ProductsItem } from "./styled"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

export const Cart = () => {
   const dispatch = useDispatch()
   const products = useSelector(state => state.cart.products)

   const [show, setShow] = useState(true)

   const handleCartClick = () => {
      setShow(!show)
   }

   const handleProductChange = (key, type) => {
      // alert(key + ' = ' + type)
      dispatch({
         type: 'CHANGE_PRODUCT',
         payload: { key, type }
      })
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
               <ProductsItem key={ index }>
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
                     <ProductQtIcon 
                        src="/assets/minus.png" 
                        onClick={ () => handleProductChange(index, '-') } />

                     <ProductQtText>
                        { item.qt }
                     </ProductQtText>

                     <ProductQtIcon 
                        src="/assets/plus.png" 
                        onClick={ () => handleProductChange(index, '+') } />
                  </ProductQuantityArea>

               </ProductsItem>
            ))}

            </ProductsArea>

         </CartBody>
      </CartArea>
   )
}