'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

export const SigninForm = () => {
   const router = useRouter()
   const [emailField, setEmailField] = useState('')
   const [passwordField, setPasswordField] = useState('')

   const handleEnterButton = () => {
      router.replace('/home')
   }

   return(
      <>
         <input 
            placeholder="Digite seu e-email"
            value={ emailField }
            onChange={ e => setEmailField(e.target.value) }
         />

         <input 
            placeholder="Digite sua senha"
            type="password"
            value={ passwordField }
            onChange={ e => setPasswordField(e.target.value) }
         />

         <button onClick={ handleEnterButton }>Entrar</button>
      </>
   )
}