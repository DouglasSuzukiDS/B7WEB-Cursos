'use client'

import { Button } from "@/components/admin/Button"
import { InputField } from "@/components/admin/InputField"
import { useState } from "react"

const Page = () => {
   const [passwordInput, setPasswordInput] = useState('')

   const handleLoginButton = () => {

   }
   
   return(
      <div>
         Painel ADM - Login
         <InputField 
            type="password"
            value={ passwordInput }
            onChange={ e => setPasswordInput(e.target.value) }
            placeholder="Digite a senha"
         />

         <Button
            value="Entrar"
            onClick={ handleLoginButton }
         />
      </div>
   )
}


export default Page