import React from 'react'
import { CategoryImage, Container } from './styled'

export const CategoryItem = ({ data, activeCategory, setActiveCategory }) => {
   const handleCategoryClick = () => {
      setActiveCategory( data.id )
   }

   return(
      <Container 
         active={ activeCategory } 
         id={ data.id }
         onClick={ handleCategoryClick }
      >
         <CategoryImage src={ data.image } />
      </Container>
   )
}