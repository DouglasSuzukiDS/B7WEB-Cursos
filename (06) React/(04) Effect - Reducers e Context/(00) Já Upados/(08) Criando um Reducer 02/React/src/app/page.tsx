'use client'

import { ListReducer } from "@/reducers/ListReducer"
import { Item } from "@/types/Item"
import { useReducer, useState } from "react"

const Page = () => {
  /*const [list, setList] = useState<Item[]>([])
  
  const addNewItem = (text: string) => {
    setList([ ...list, { 
      id: list.length,
      text,
      done: false
     } ])
  }

  const editItemText = (id: number, newText: string) => {
    setList(
      list.map(t => {
        if(t.id === id) t.text = newText

        return t
      })
    )
  }

  const toggleItem = (id: number) => {
    setList(
      list.map(t => {
        if(t.id === id) t.done = !t.done

        return t
      })
    )
  }

  const removeItem = (id: number) => {
    setList( list.filter(t => t.id !== id) )
  }*/

  const [list, dispatch] = useReducer(ListReducer, [])

  const handleAddClick = () => {
    dispatch({
      type: 'add',
      payload: {
        text: 'Novo item'
      }
    })
  }

  const handleToggleDone = () => {
    dispatch({
      type: 'toggleDone',
      payload: { id: 2 }
    })
  }

  const handleEditText = () => {
    dispatch({
      type: 'editText',
      payload: { id: 2, newText: 'Bla bla' }
    })
  }

  const handleDelete = () => {
    dispatch({
      type: 'remove',
      playload: { id: 2 }
    })
  }

  return (
    <div className="">
      <button onClick={ handleAddClick }>Adicionar</button>
    </div>
  )
}

export default Page