'use client'

import { TodoItem } from "@/types/TodoItem"
import { useState } from "react"

const Page = () => {
  const [itemInput, setItemInput] = useState('')
  const [list, setList] = useState<TodoItem[]>([
    { id: 1, label: 'Fazer o dever de casa', checked: false },
    { id: 2, label: 'Compar o bolo', checked: false },
  ])

  const handleAddButton = () => {
    if(itemInput.trim() === '') return 

    setList([
      ...list,
      { id: list.length + 1, label: itemInput, checked: false }
    ])
    setItemInput('')
  }

  const deleteItem = (id: number) => {
    setList(list.filter(item => item.id !== id))
  }

  const toggleItem = (id: number) => {
    let newList = [...list]

    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].checked = !newList[i].checked
      }
    }

    setList(newList)
  }

  return (
    <div className="w-screen h-screen flex flex-col  items-center">
      <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border border-gray-500">

        <input type="text"
          placeholder="O que deseja fazer?"
          className="flex-1 border border-clack p-3 text-2xl text-black rounded-md mr-3"
          value={ itemInput }
          onChange={ e => setItemInput(e.target.value) }
        />
        <button onClick={ handleAddButton }>Adicionar</button>
      </div>

      <p className="my-4">{ list.length } itens na lista</p>

      <ul className="w-full max-w-lg list-disc pl-5">
        { list.map(item => (
          <li key={ item.id }>
            <input 
              type="checkbox" checked={ item.checked } 
              className="w-6 h-5 m-3" 
              onClick={ () => toggleItem(item.id) } />

            { item.label } - <button 
              className="hover:underline"
              onClick={ () => deleteItem(item.id) }
            >[ Deletar ]</button>
          </li>
        )) }
      </ul>

    </div>
  )
}

export default Page