'use client'

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

export default function Page() {

  const SignUpFormSchema = z.object({
    name: z.string().min(2).max(20),
    lastName: z.string().min(2).optional(),
    age: z.number().min(18)
  })

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(SignUpFormSchema)
  })

  const handleSignUpForm = () => {
    alert('Vai enviar')
  }

  return (
    <div className="container mx-auto">

     <form onSubmit={ handleSubmit(handleSignUpForm) }>
      <input 
        { ...register('name') }
        className="border border-white p-3 m-3 text-black"
      />

      <input 
        { ...register('lastName') }
        className="border border-white p-3 m-3 text-black"
      />

      <input 
        { ...register('age', { valueAsNumber: true }) }
        className="border border-white p-3 m-3 text-black"
      />

      <input type="submit" value="Cadastrar" />
     </form>

    </div>
  )
}
