import Script from 'next/script'
import { useState } from 'react'

type Props = {
   nome: string
}

const Sobre = ({ nome }: Props) => {
   const [contador, setContador] = useState(19)

   const handleContadorBtn = () => {
      setContador(contador + 1)
   }

   return(
      <div>
         <h1>Sobre ({contador})</h1>

         <p>O nome em 'NEXT_PUBLIC_NOME' é: { process.env.NEXT_PUBLIC_NOME }</p>
         <p>O nome é { nome }</p>

         <ul>
            <li> <a href="/sobre/Nick">Nick</a> </li>
            <li> <a href="/sobre/Tonhao">Tonhao</a> </li>
         </ul>

         <button onClick={ handleContadorBtn }>Aumentar</button>

         {/* <Script
            src = 'https://google-analytics.com/analytics.js'
            strategy='afterInteractive' 
               // afterInteractive => Depois que a paga carregar
               // beforeInteractive => Carrega primeiro
               // lazyOnload => Quando der pra carregar
               // worker => esta em teste
            onLoad={() => { }} // Quando carregar
         /> */}

         {/* <Script strategy='afterInteractive'>
            { `window.alert('Carregou')` }
         </Script> */}
      </div>
   )
} 

// Aqui renderiza no servidor
export const getStaticProps = () => {
   return {
      props: {
         nome: process.env.NOME
      }
   }
}

export default Sobre
