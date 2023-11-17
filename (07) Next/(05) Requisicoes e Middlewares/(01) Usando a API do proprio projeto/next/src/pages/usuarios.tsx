import { Layout } from "@/components/layout"
import Head from "next/head"
import styles from '../../styles/Usuarios.module.css'

const Usuarios = () => {
   return(
      <Layout>
         <div>
            <Head>
               <title>Usuários</title>
            </Head>

            <h1>Página Usuários</h1>
         </div>
      </Layout>
   )
}

export const getServerSideProps = async() => {
   // DRY = Dont Repeat Yourself

   return {
      props: {

      }
   }
}

export default Usuarios