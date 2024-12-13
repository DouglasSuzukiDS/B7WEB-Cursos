import React from "react";
import { Container, ProductArea, ProductButton, ProductButtons, ProductDetails, ProductInfoArea, ProductIngredients, ProductName, ProductPhoto, ProductPrice, ProductQtImage, ProductQtText, ProductQuantity, ProductQuantityArea } from "./styled";
import { useState } from "react";
import { useEffect } from "react";

export const ModalProduct = ({ data, setStatus }) => {
   const [qt, setQt] = useState(1)

   useEffect(() => {
      setQt(1)
   }, [data])

   const handleCancelButton = () => {
      setStatus(false)
   }

   const handleMinusQt = () => {
      if(qt > 1 ) {
         setQt(qt - 1)
      }
   }

   const handlePlusQt = () => {
      setQt(qt + 1)
   }

   return(
      <Container>
         <ProductArea>

            <ProductPhoto src={ data.image } />

            <ProductInfoArea>

               <ProductDetails>
                  <ProductName>
                     { data.name }
                  </ProductName>

                  <ProductIngredients>
                     { data.ingredients }
                  </ProductIngredients>
               </ProductDetails>

               <ProductQuantityArea>
                  <ProductQuantity>

                     <ProductQtImage 
                        src='/assets/minus.png' 
                        onClick={ handleMinusQt } />

                     <ProductQtText>
                        { qt }
                     </ProductQtText>

                     <ProductQtImage 
                        src='/assets/plus.png' 
                        onClick={ handlePlusQt } />

                  </ProductQuantity>

                  <ProductPrice>
                     R$ { (data.price * qt).toFixed(2) }
                  </ProductPrice>
               </ProductQuantityArea>

            </ProductInfoArea>

         </ProductArea>

         <ProductButtons>
            <ProductButton 
               small={ true }
               onClick={ handleCancelButton }>Cancelar</ProductButton>

            <ProductButton>Adicionar ao carrinho</ProductButton>
         </ProductButtons>
      </Container>
   )
}