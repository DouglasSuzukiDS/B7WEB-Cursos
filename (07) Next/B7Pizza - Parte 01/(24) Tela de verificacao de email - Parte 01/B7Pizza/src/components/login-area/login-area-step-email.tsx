'use client'

import { useState } from "react"
import { CustomInput } from "../layout/custom-input"
import { Button } from "../ui/button"

type Props = {
   onValidate: (hasEmail: boolean, email: string) => void
}
export const LoginAreaStepEmail = ({ onValidate }: Props) => {
   const [loading, setLoading] = useState(false)
   const [errors, setErrors] = useState<any>(null)

   const [emailField, setEmailField] = useState('')

   const handleButton = async () => {

   }

   return (
      <>
         <div>
            <p className="mb-2">Digite seu email</p>

            <CustomInput
               name="email"
               errors={errors}
               disabled={loading}
               type="email"
               value={emailField}
               onChange={e => setEmailField(e.target.value)} />
         </div>

         <Button
            disabled={loading}
            onClick={handleButton}
            className="w-full mt-4"
         >
            Continuar
         </Button>
      </>
   )
}