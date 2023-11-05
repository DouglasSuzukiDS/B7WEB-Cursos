import Link from 'next/link'
import { navigationLinks } from '../../utils/data'
import styles from './NavBar.module.css'

export const NavBar = () => {
   return(
      <ul className={ styles.container }>
         { navigationLinks.map((link, index) =>(
            <li key={ index } className={ styles.linkItem }>
               <Link href={ link.path }>{ link.label }</Link>
            </li>
         )) }
      </ul>
   )
}