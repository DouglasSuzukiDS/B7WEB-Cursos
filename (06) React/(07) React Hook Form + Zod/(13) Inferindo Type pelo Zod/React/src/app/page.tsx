'use client'

import { z } from "zod"

export default function Page() {

  const SignUpForm = z.object({
    name: z.string().min(2).max(20),
    lastName: z.string().min(2).optional(),
    age: z.number().min(18)
  })

  type SignUpObject = z.infer<typeof SignUpForm>

  const obj: SignUpObject = {
    name: 'Nick',
    lastName: 'Suzuki',
    age: 22
  }

  return (
    <div className="container mx-auto">

     

    </div>
  )
}
