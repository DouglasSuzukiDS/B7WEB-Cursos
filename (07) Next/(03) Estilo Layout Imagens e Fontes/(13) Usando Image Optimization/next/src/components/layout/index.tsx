import { ReactElement } from 'react'
import styles from './Layout.module.css'
import { NavBar } from '../NavBar'
import Harry from '../../../public/Harry.png'
import Image from 'next/image'

type Props = {
   children: ReactElement
}

export const Layout = ({ children }: Props) => {
   return(
      <div className={ styles.container }>
         <header className='header'>
            <h1>Projeto</h1>
         </header>

         <Image 
            src={ Harry } alt='Harry Image' 
            width={300} height={300}/>

         <NavBar />
         
         <main>{ children }</main>  

         <footer className='footer'>
            Todos os direitos reservados
         </footer>
      </div>
   )
}