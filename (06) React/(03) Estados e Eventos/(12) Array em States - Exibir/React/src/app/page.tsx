'use client'

import { TodoItem } from "@/types/TodoItem"
import { useState } from "react"

const Page = () => {
  const [list, setList] = useState<TodoItem[]>([
    { label: 'Fazer o dever de casa', checked: false },
    { label: 'Compar o bolo', checked: false },
  ])

  const handleClearButton = () => {

  }

  return (
    <div className="w-screen h-screen flex flex-col  items-center">
      <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border border-gray-500">

        <input type="text"
          placeholder="O que deseja fazer?"
          className="flex-1 border border-clack p-3 text-2xl text-black rounded-md mr-3"
        />
        <button onClick={handleClearButton}>Adicionar</button>
      </div>

      <ul className="w-full max-w-lg list-disc pl-5">
        { list.map(item => (
          <li>
            { item.label } - <button className="hover:underline">[ Deletar ]</button>
          </li>
        )) }
      </ul>

    </div>
  )
}

export default Page