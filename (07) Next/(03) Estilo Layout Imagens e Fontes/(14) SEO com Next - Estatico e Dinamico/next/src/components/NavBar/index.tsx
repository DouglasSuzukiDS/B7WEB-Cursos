'use client' 

import Link from 'next/link'
import { navigationLinks } from '../../utils/data'
import styles from './NavBar.module.css'

// Para nova versão do Next
import { usePathname } from 'next/navigation'

export const NavBar = () => {
   // const router = useRouter()
   const pathName = usePathname()

   const verifyActiveLink = (loopPath: string) => {
      if(loopPath === '/' && pathName !== '/') {
         return null
      }

      if(pathName?.indexOf(loopPath) === 0) {
         return styles.linkActive
      }

      return null
   }

   return(
      <ul className={ styles.container }>
         { navigationLinks.map((link, index) =>(
            <li key={ index } 
               // className={ pathName === link.path ? styles.linkActive : styles.linkItem }
               className={[
                  styles.linkItem,
                  link.path.includes(pathName!) ? styles.linkActive : null
               ].join(' ')}
               /*className={[
                  styles.linkItem,
                  pathName?.indexOf(link.path) === 0 ? styles.linkActive : null
                  verifyActiveLink(link.path)
               ].join(' ')}*/
               >
               <Link href={ link.path[0] }>{ link.label }</Link>
            </li>
         )) }
         <li>{ pathName }</li>
      </ul>
   )
}