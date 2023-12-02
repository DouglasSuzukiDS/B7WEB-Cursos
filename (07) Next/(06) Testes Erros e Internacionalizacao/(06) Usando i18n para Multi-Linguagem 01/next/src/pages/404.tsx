import Head from 'next/head'
import { Layout } from '../components/layout'

const Custom404 = () => {
   return(
      <Layout>
         <div>
            <Head>
               <title>Página Não Encontrada</title>
            </Head>

            <h1>404</h1>

            <p>Página não encontrada</p>
         </div>
      </Layout>
   )
}

export default Custom404