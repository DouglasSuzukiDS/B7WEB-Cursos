import { React } from 'react'
import { CategoryImage, Container } from './styled'

export const CategoryItem = ({ data, activeCategory }) => {
   return(
      <Container active={ activeCategory } id={ data.id }>
         <CategoryImage src={ data.image } />
      </Container>
   )
}