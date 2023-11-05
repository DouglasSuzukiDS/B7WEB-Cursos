import { ReactElement } from 'react'
import styles from './Layout.module.css'
import { NavBar } from '../NavBar'

type Props = {
   children: ReactElement
}

export const Layout = ({ children }: Props) => {
   return(
      <div className={ styles.container }>
         <header className='header'>
            <h1>Projeto</h1>
         </header>

         <NavBar />
         
         <main>{ children }</main>  

         <footer className='footer'>
            Todos os direitos reservados
         </footer>
      </div>
   )
}