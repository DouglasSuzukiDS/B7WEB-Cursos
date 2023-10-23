'use client'

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

export default function Page() {

  const SignUpFormSchema = z.object({
    // name: z.string().min(2, { message: 'Precisa ter pelo menos 2 letras' }).max(20),
    name: z.string().min(2, 'Precisa ter pelo menos 2 letras.').max(20, 'Máximo 20 letras.'),
    lastName: z.string().min(2).optional(),
    age: z.number({ invalid_type_error: 'Idade precisa se um número.' }).min(18, 'Mínimo 18 anos.')
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(SignUpFormSchema)
  })

  const handleSignUpForm = () => {
    alert('Vai enviar')
  }

  return (
    <div className="container mx-auto">

      <form onSubmit={handleSubmit(handleSignUpForm)}>
        <div>
          <input
            {...register('name')}
            className="border border-white p-3 m-3 text-black"
          />

          {errors.name && <p>{errors.name.message as string}</p>}
        </div>

        <div>
          <input
            {...register('lastName')}
            className="border border-white p-3 m-3 text-black"
          />

        {errors.lastName && <p>{errors.lastName.message as string}</p>}

        </div>


        <div>
          <input
            {...register('age', { valueAsNumber: true })}
            className="border border-white p-3 m-3 text-black"
          />
          {errors.age && <p>{errors.age.message as string}</p>}
        </div>


        <input type="submit" value="Cadastrar" />
      </form>

    </div>
  )
}
