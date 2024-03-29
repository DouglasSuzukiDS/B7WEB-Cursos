import { Address } from '@/types/Address'
import styles from './styles.module.css'
import { Icon } from '../Icon'

type Props = {
   color: string
   address: Address
   onSelect: (address: Address) => void
   onEdit: (id: number) => void
   onDelete: (id: number) => void
}

export const AddressItem = ({ color, address, onSelect, onEdit, onDelete }: Props) => {
   return(
      <div className={ styles.container }>
         <div className={ styles.addressArea }>
            <div className={ styles.addressIcon }>
               <Icon 
                  color={ color }
                  icon='location'
                  width={ 24 }
                  height={ 24 }
               />
            </div>

            <div className={ styles.addressText }>
               { `${ address.street } ${ address.number }, ${ address.city }` }
            </div>
         </div>

         <div className={ styles.btnArea }>
            <div className={ styles.menuIcon }>
               <Icon 
                  color='#6A7D8B'
                  icon='dots'
                  width={ 24 }
                  height={ 24 }
               />
            </div>
         </div>
      </div>
   )
}