import { Layout } from "@/components/layout"
import Head from "next/head"
import styles from '../../../styles/UsuariosNovo.module.css'
import api from '../../libs/api'
import { User } from "../../types/User"
import { useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"

const UsuariosNovo = () => {
   const [nameInput, setNameInput] = useState('')
   const [emailInput,setEmailInput] = useState('')

   const router = useRouter()

   const handleSaveForm = async() => {
      if(nameInput && emailInput) {
         /*const req = await fetch(`/api/users`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               name: nameInput,
               email: emailInput
            })
         })

         const json = await req.json()

         if(json.status){
            router.push('/usuarios')
         } else {
            alert(json.error)
         }*/

         const json = await axios.post(`/api/users`, {
            name: nameInput,
            email: emailInput
         })

         if(json.data.status){
            router.push('/usuarios')
         } else {
            alert(json.data.error)
         }
      }
   }

   return(
      <Layout>
         <div>
            <Head>
               <title>Usuários - Novo</title>
            </Head>

            <h1>Página Usuários - Novo</h1>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
               <input 
                  type="text" 
                  placeholder="Digite o nome de usuário"
                  className={ styles.input }
                  value={ nameInput }
                  onChange={ e => setNameInput(e.target.value) } />
               
               <input 
                  type="text" 
                  placeholder="Digite o email de usuário"
                  className={ styles.input }
                  value={ emailInput }
                  onChange={ e => setEmailInput(e.target.value) } />
            </div>

            <button
               onClick={ handleSaveForm }>Cadastrar</button>
            
            <hr />
         </div>
      </Layout>
   )
}

export default UsuariosNovo