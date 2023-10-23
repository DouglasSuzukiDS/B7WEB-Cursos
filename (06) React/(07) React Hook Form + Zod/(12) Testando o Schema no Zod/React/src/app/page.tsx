'use client'

import { z } from "zod"

export default function Page() {

  type SignUpForm = {
    name: string // required, minLength: 2, maxLength: 20
    lastName: string // minLength: 2
    age: number // required, minLength: 18
  }

  const SignUpForm = z.object({
    name: z.string().min(2).max(20),
    lastName: z.string().min(2).optional(),
    age: z.number().min(18)
  })

  console.log(
    SignUpForm.parse({
      name: 'Nick',
      lastName: 'Suzuki',
      age: 22
    })
  )

  return (
    <div className="container mx-auto">

     

    </div>
  )
}
