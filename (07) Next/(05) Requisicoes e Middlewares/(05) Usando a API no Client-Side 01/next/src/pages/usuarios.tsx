import { Layout } from "@/components/layout"
import Head from "next/head"
import styles from '../../styles/Usuarios.module.css'
import api from '../libs/api'
import { User } from "@/types/User"
import { useState } from "react"

type Props = {
   users: User[]
}

const Usuarios = ({ users }: Props) => {
   const [showMore, setShowMore] = useState(true)
   const [loading, setLoading] = useState(false)
   const [pageCount, setPageCount] = useState(1)
   const [userList, setUserList] = useState<User[]>(users)

   const handleLoadMore = async() => {
      if(!loading) {
         setLoading(true)
         const req = await fetch(`/api/users?page=${ pageCount + 1 }`)
         const json = await req.json()

         if(json.status) {
            if(json.users.length === 0) {
               setShowMore(false)
            } 
            setUserList([...userList, ...json.users])
         }

         setPageCount(pageCount + 1)
         setLoading(false)
      }

   }

   return(
      <Layout>
         <div>
            <Head>
               <title>Usuários</title>
            </Head>

            <h1>Página Usuários</h1>

            <ul>
               { userList.map((item, index) => (
                  <li key={ index }>{ item.name }</li>
               )) }
            </ul>
            
            { showMore &&
               <button
                  onClick={ handleLoadMore }>Carregar mais</button>
            }
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