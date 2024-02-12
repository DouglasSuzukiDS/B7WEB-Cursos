import styles from './styles.module.css'
import CartIcon from './Cart.svg'
import ConfigIcon from './Config.svg'
import FavIcon from './Fav.svg'
import LogoutIcon from './Logout.svg'
import MenuIcon from './Menu.svg'
import OrderIcon from './Order.svg'

type Props = {
   color: string
   label: string
   icon:'Cart' | 'Config' | 'Fav' | 'Logout' | 'Menu' | 'Order'
   onClick: () => void
   disabled?: boolean
}

export const SidebarMenuItem = ({ color, label, icon, onClick, disabled }: Props) => {
   return(
      <div className={ styles.container } onClick={ onClick }>
         { icon === 'Cart' && <CartIcon color={ color } /> }
         
         { icon === 'Config' && <ConfigIcon color={ color } /> }

         { icon === 'Fav' && <FavIcon color={ color } /> }

         { icon === 'Logout' && <LogoutIcon color={ color } /> }

         { icon === 'Menu' && <MenuIcon color={ color } /> }

         { icon === 'Order' && <OrderIcon color={ color } /> }

         <span className={ disabled ? styles.disabled : '' }>
            { label }
         </span>
      </div>
   )
}