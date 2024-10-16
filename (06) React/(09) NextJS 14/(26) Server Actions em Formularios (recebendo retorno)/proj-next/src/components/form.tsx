'use client'

import { receberDados } from "@/actions/receber-dados"
import { useFormState, useFormStatus } from "react-dom"

const initialState = {
   msg: ''
}

export const Form = () => {
   const [state, formAction] = useFormState(receberDados, initialState) // Em resumo, cria um intermediario (receberDados), sempre que executar a função salva a resposta no state
   const { pending } = useFormStatus()

   return(
      <form action={ formAction }>
        <input disabled={ pending } className="text-black" type="text" name="name" placeholder="Digite seu nome" />
        <input disabled={ pending } className="text-black" type="number" name="age" placeholder="Digite sua idade" />

        <input disabled={ pending } type="submit" value='Enviar' />

        <p>MSG: { state.msg }</p>
      </form>
   )
}