import { Tenant } from '@/types/Tenant'
import styles from './styles.module.css'
import { useAuthContext } from '@/contexts/auth'
import { Button } from '../Button'

type Props = {
   tenant: Tenant
   open: boolean
   onClose: () => void
}

export const Sidebar = ({ tenant, open, onClose }: Props) => {
   const { user } = useAuthContext()

   return(
      <div 
         className={ styles.container }
         style={{ width: open ? '100vw' : '0' }}>
            
         <div className={ styles.area }>
            <div className={ styles.header}>

               <div 
                  className={ styles.loginArea}
                  style={{ borderBottomColor: tenant.mainColor }}>
                  { user &&
                     <div className={ styles.userInfo }>
                        <strong>{ user.name }</strong>
                        Último pedido há X semanas
                     </div>
                  }

                  { !user &&
                     <Button 
                        color={ tenant.mainColor }
                        label='Fazer Login'
                        onClick={ () => {} }
                        fill
                     />
                  }
               </div>

               <div 
                  className={ styles.closeBtn }
                  style={{ color: tenant.mainColor }}
                  onClick={ onClose }>
                     X
                  </div>

            </div>

            <div className={ styles.line }></div>

            <div className={ styles.menu}>
               ***
            </div>
         </div>
         
      </div>
   )
}