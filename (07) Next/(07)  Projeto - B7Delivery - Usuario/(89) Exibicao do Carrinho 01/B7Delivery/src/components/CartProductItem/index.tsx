import { Product } from '@/types/Product'
import styles from './styles.module.css'
import { useFormatter } from '@/libs/useFormatter'
import { Quantity } from '../Quantity'

type Props = {
   color: string
   quantity: number
   product: Product
   onChange: (newCount: number, id: number) => void
}

export const CartProductItem = ({ color, quantity, product, onChange }: Props) => {

   const formatter = useFormatter()

   return(
      <div className={ styles.container }>
         <div className={ styles.productImage }>
            <img src={ product.image } alt={ product.name } />
         </div>

         <div className={ styles.productInfo }>
            <div className={ styles.categoryName }>
               { product.catName }
            </div>

            <div className={ styles.productName }>
               { product.name }
            </div>

            <div className={ styles.productPrice }>
               { formatter.formatPrice(product.price) }
            </div>

         </div>

         <div className={ styles.qtControl }>
            <Quantity 
               color={ color }
               count={ quantity }
               onUpdateCount={ (newCount: number) => onChange(newCount, product.id) }
               min={ 0 }
               small
            />
         </div>
      </div>
   )
}