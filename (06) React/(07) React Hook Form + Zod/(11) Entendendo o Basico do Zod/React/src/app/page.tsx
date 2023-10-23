'use client'

import { z } from "zod"

export default function Page() {

  type SignUpForm = {
    name: string // required, minLength: 2, maxLength: 20
    lastName: string // minLength: 2
    age: number // required, minLength: 18
  }

  return (
    <div className="container mx-auto">

     

    </div>
  )
}
