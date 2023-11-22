import { Layout } from "@/components/layout"
import Head from "next/head"
import styles from '../../styles/Usuarios.module.css'
import api from '../libs/api'
import { User } from "@/types/User"

type Props = {
   users: User[]
}

const Usuarios = ({ users }: Props) => {
   return(
      <Layout>
         <div>
            <Head>
               <title>Usuários</title>
            </Head>

            <h1>Página Usuários</h1>

            <ul>
               { users.map((item, index) => (
                  <li key={ index }>{ item.name }</li>
               )) }
            </ul>
         </div>
      </Layout>
   )
}

export const getServerSideProps = async() => {
   // DRY = Dont Repeat Yourself

   const users = await api.getAllUsers(0)

   return {
      props: {
         users
      }
   }
}

export default Usuarios