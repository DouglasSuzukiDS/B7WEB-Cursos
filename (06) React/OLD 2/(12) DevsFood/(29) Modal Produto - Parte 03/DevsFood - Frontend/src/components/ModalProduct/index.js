import React from "react";
import { Container, ProductArea, ProductButton, ProductButtons, ProductDetails, ProductInfoArea, ProductIngredients, ProductName, ProductPhoto, ProductQuantityArea } from "./styled";

export const ModalProduct = ({ data }) => {
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
                  qqq
               </ProductQuantityArea>

            </ProductInfoArea>

         </ProductArea>

         <ProductButtons>
            <ProductButton>Cancelar</ProductButton>

            <ProductButton>Adicionar ao carrinho</ProductButton>
         </ProductButtons>
      </Container>
   )
}