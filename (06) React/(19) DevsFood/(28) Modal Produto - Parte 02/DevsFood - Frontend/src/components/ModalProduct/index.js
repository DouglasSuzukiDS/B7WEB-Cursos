import React from "react";
import { Container, ProductArea, ProductButtons, ProductDetails, ProductInfoArea, ProductPhoto, ProductQuantityArea } from "./styled";

export const ModalProduct = ({ data }) => {
   return(
      <Container>
         <ProductArea>

            <ProductPhoto src={ data.image } />

            <ProductInfoArea>

               <ProductDetails>
                  { data.name }
               </ProductDetails>

               <ProductQuantityArea>
                  qqq
               </ProductQuantityArea>

            </ProductInfoArea>

         </ProductArea>

         <ProductButtons>

         </ProductButtons>
      </Container>
   )
}