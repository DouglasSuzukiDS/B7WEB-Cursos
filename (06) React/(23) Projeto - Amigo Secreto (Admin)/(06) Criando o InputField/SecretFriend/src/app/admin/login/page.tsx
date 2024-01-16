'use client'

import { InputField } from "@/components/admin/InputField"
import { useState } from "react"

const Page = () => {
   const [passwordInput, setPasswordInput] = useState('')

   return(
      <div>
         Painel ADM - Login
         <InputField 
            type="password"
            value={ passwordInput }
            onChange={ e => setPasswordInput(e.target.value) }
            placeholder="Digite a senha"
         />
      </div>
   )
}


export default Page