import Head from 'next/head'
import { Layout } from '../components/layout/index'

const Custom500 = () => {
   return(
      <Layout>
         <div>
            <Head>
               <title>Erro interno do Servidor</title>
            </Head>

            <h1>500</h1>

            <p>Erro Interno do Servidor</p>
         </div>
      </Layout>
   )
}

export default Custom500