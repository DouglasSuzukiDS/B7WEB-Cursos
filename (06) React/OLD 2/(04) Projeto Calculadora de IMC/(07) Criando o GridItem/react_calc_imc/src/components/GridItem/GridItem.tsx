import { Level } from "../../helpers/imc"
import styles from './GridItem.module.css'
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'

type Props = {
   item: Level
}

export const GridItem = ({ item }: Props) => {
   return(
      <div className={ styles.main } style={{ backgroundColor: item.color }}>
         <div className={ styles.gridIcon }>
            {/* { item.icon === 'up' && 
               <img src={ upImage } alt='Up Image' width='30' /> 
            }

            { item.icon === 'down' && 
               <img src={ downImage } alt='Dowm Image' width='30' /> 
            } */}
            <img src={ item.icon === 'up' ? upImage : downImage }
               width='30'
               alt={ item.icon === 'up' ? 'Up Image' : 'Down Image' } />
         </div>

         <div className={ styles.gridTitle }>{ item.title }</div>

         <div className={ styles.gridInfo }>
            <>
               IMC entá entre <strong>{ item.imc[0] }</strong> e <strong>{ item.imc[1] }</strong>
            </>
         </div>
      </div>
   )
}