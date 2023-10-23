import React from "react"
import { Container, ProductButton, ProductButtonArea, ProductInfoArea, ProductIngredients, ProductName, ProductPhoto, ProductPhotoArea, ProductPrice } from "./styled"

export const ProductItem = ({ data }) => {
   return(
      <Container>
         <ProductPhotoArea>
            <ProductPhoto src={ data.image } />
         </ProductPhotoArea>

         <ProductInfoArea>
            <ProductName>{ data.name }</ProductName>

            <ProductPrice>{ data.price }</ProductPrice>

            <ProductIngredients>{ data.ingredients }</ProductIngredients>
         </ProductInfoArea>

         <ProductButtonArea>
            <ProductButton src='/assets/next.png' />
         </ProductButtonArea>
      </Container>
   )
}