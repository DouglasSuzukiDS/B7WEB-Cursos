import { ReactElement } from 'react'
import styles from './Layout.module.css'
import { NavBar } from '../NavBar'
import { useRouter } from 'next/router'
import Link from 'next/link'

type Props = {
   children: ReactElement
}

export const Layout = ({ children }: Props) => {
   // const router = useRouter()

   return(
      <div className={ styles.container }>
         <header className='header'>
            <h1>Projeto</h1>

            {/* <ul>
               { router.locales!.map((item, index) => (
                  <li key={ index }>
                     <Link
                        href={'/'} 
                        locale={ item }> 
                        { item }
                     </Link>
                  </li>
               )) }
            </ul> */}
         </header>

         <NavBar />
         
         <main>{ children }</main>  

         <footer className='footer'>
            Todos os direitos reservados
         </footer>
      </div>
   )
}