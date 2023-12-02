import { MyButton } from '@/components/MyButton'
import Link from 'next/link'
import Script from 'next/script'
import { useState } from 'react'
import styles from '../../../styles/Sobre.module.css'
import { Layout } from '@/components/layout'
import Head from 'next/head'
import { useRouter } from 'next/router'

type Props = {
   nome: string
}

const Sobre = ({ nome }: Props) => {
   const [contador, setContador] = useState(19)

   const handleContadorBtn = () => {
      setContador(contador + 1)
   }

   const router = useRouter()

   return (

      <Layout>
         <div>
            <Head>
               <title>Sobre</title>
            </Head>
            
            <h1 className={styles.title}>Sobre ({contador})</h1>

            <p>O nome em 'NEXT_PUBLIC_NOME' é: {process.env.NEXT_PUBLIC_NOME}</p>
            <p>O nome é {nome}</p>

            <p>A linguagem é: { router.locale }</p>

            <ul className='lista' style={{ backgroundColor: (contador < 20 ? '#0F0' : '#F00') }}>
               <li>
                  <Link
                     // href="/sobre/Nick"
                     href={{
                        pathname: '/sobre/[slug]',
                        query: { slug: 'nick' }
                     }}
                  // replace => não armazena historico
                  >Nick</Link>
               </li>
               <li> <Link href="/sobre/Tonhao">Tonhao</Link> </li>
            </ul>

            {/* <button onClick={ handleContadorBtn }>Aumentar</button> */}

            <MyButton
               label='Aumentar'
               onClick={handleContadorBtn} />

            <style jsx>{`
            // global => Props para tag, aplica para o componente
            .lista {
               font-weight: bold;
            }

            .lista li {
               font-size: 24px;
            }
         `}</style>
         </div>
      </Layout>
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
