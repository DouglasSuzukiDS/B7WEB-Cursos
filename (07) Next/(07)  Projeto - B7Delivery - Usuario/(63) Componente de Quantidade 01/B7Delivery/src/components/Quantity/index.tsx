import styles from './styles.module.css'

type Props = {
   color: string
   count: number
   onUpdateCount: (newCount: number) => void
   min?: number
   max?: number
}

export const Quantity = ({}: Props) => {
   return(
      <div className={ styles.container }>
         **
      </div>
   )
}