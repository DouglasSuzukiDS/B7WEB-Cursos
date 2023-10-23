'use client'

import { Item } from "@/types/Item"
import { useState } from "react"

const Page = () => {
  const [list, setList] = useState<Item[]>([])
  
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
  }

  return (
    <div className="">
      
    </div>
  )
}

export default Page