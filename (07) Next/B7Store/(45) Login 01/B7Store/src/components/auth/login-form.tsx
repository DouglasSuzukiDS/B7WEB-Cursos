'use client'

import { useAuthStore } from "@/store/auth"
import Link from "next/link"
import { ChangeEvent, FormEvent, useState, useTransition } from "react"
import z from "zod"

const schema = z.object({
   email: z.email({ message: "Email inválido" }),
   password: z.string().min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
})

type ErrorStructure = {
   email?: string
   password?: string
   form?: string
}

export const LoginForm = () => {
   const [form, setForm] = useState({ email: '', password: '' })
   const [errors, setErrors] = useState<ErrorStructure>({})
   const [pending, startTransition] = useTransition()

   const authStore = useAuthStore(state => state)

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

   }

   const handleSubmit = (e: FormEvent) => {

   }

   return (
      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-8 rounded-sm">
         <h2 className="text-xl font-bold mb-4">Login</h2>

         <div className="mb-4">
            <label htmlFor="email" className="mb-1">E-mail</label>

            <input
               autoFocus
               type="email"
               id="email"
               value={form.email}
               onChange={handleChange}
               className="w-full border border-gray-200 rounded-sm px-3 py-2"
               disabled={pending}
            />

            {errors.email &&
               <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
         </div>

         <div className="mb-4">
            <label htmlFor="password" className="mb-1">Senha</label>

            <input
               type="password"
               id="password"
               value={form.password}
               onChange={handleChange}
               className="w-full border border-gray-200 rounded-sm px-3 py-2"
               disabled={pending}
            />

            {errors.password &&
               <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
         </div>

         <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-sm"
            disabled={pending}>
            {pending ? 'Entrando...' : 'Entrar'}
         </button>

         {errors.form &&
            <div className="text-red-500 text-sm mt-4">{errors.form}</div>}

         <div className="text-center mt-4">
            <Link
               href={'/register'}
               className="text-sm text-gray-500 ">
               Ainda não tem uma conta? Registre-se
            </Link>
         </div>
      </form>
   )
}