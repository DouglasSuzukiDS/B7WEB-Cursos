import { Tenant } from '@/types/Tenant'
import styles from './styles.module.css'
import { useAuthContext } from '@/contexts/auth'
import { Button } from '../Button'
import { SidebarMenuItem } from '../SidebarMenuItem'
import { useRouter } from 'next/router'

type Props = {
   tenant: Tenant
   open: boolean
   onClose: () => void
}

export const Sidebar = ({ tenant, open, onClose }: Props) => {
   const { user, setToken } = useAuthContext()

   const router = useRouter()

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
                        onClick={ () => router.push(`/${ tenant.slug }/login`) }
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

               <SidebarMenuItem 
                  color={ '#6A7D8B' }
                  icon='Menu'
                  label='Cardápio'
                  onClick={ onClose }
               />

               <SidebarMenuItem 
                  color={ '#6A7D8B' }
                  icon='Cart'
                  label='Sacola'
                  onClick={ () => router.push(`${ tenant.slug }/cart`) }
               />

               <SidebarMenuItem 
                  color={ '#6A7D8B' }
                  icon='Fav'
                  label='Favoritos'
                  onClick={ () => {} }
                  disabled
               />

               <SidebarMenuItem 
                  color={ '#6A7D8B' }
                  icon='Order'
                  label='Meus Pedidos'
                  onClick={ () => () => router.push(`${ tenant.slug }/orders`) }
               />

               <SidebarMenuItem 
                  color={ '#6A7D8B' }
                  icon='Config'
                  label='Configurações'
                  onClick={ () => {} }
                  disabled
               />

            </div>

            <div className={ styles.menuButton}>
               { user &&
                  <SidebarMenuItem 
                     color={ '#6A7D8B' }
                     icon='Logout'
                     label='Sair'
                     onClick={ () => {
                        setToken('')
                        onClose()
                     } }
                  />
               }
            </div>
         </div>
         
      </div>
   )
}