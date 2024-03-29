import { Product } from '@/types/Product'
import styles from './styles.module.css'
import Link from 'next/link'
import { useAppContext } from '@/contexts/app'
import { useFormatter } from '@/libs/useFormatter'

type Props = {
   data: Product
   // mainColor: string
   // secondColor: string
}

const ProductItem = ({ data }: Props) => {
   const { tenant } = useAppContext()

   const formatter = useFormatter()

   return(
      <Link href={ `/${ tenant?.slug }/product/${ data.id }` }>
         <div className={ styles.container }>
            <div className={ styles.head }
            style={{ backgroundColor: tenant?.secondColor }}>

            </div>

            <div className={ styles.info }>
               <div className={ styles.img }>
                  <img src={ data.image } alt={ data.name } />
               </div>

               <div className={ styles.catName }>
                  { data.catName }
               </div>

               <div className={ styles.name }>
                  { data.name }
               </div>

               <div 
                  className={ styles.price } 
                  style={{ color: tenant?.mainColor }}>
                  { formatter.formatPrice(data.price) }
               </div>

            </div>
         </div>
      </Link>
   )
}

export default ProductItem