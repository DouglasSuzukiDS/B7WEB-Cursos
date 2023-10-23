'use client'

import { User } from "@/types/User"
import { useEffect, useState } from "react"

const Page = () => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState<User[]>([])

  const getUsers = async() => {
    try{
      setLoading(true)
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const json = await res.json()
  
      setUsers(json)
    } catch(err) {
      console.log('Deu algo errado')
    }

    setLoading(false)
  }

  useEffect(() => {
    getUsers()
  }, [])

  const handleAddNewPost = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Context-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        title: 'Post de teste',
        body: 'Corpo de teste',
        userId: 99
      })
    })

    const json = await res.json()
    console.log(json)
  }

  return(
    <div className="container mx-auto">
      <button onClick={ handleAddNewPost }>Adicionar Novo Post</button>
      <h1 className="text-3xl">Lista de usuários</h1>

      { loading && 'Carregando ...' }

      { !loading && users.length > 0 && 
        <ul>
          { users.map(item => (
            <li key={ item.id }>{ item.name } ({ item.address.city })</li>
          )) }
        </ul>
      }

      { !loading && users.length === 0 && 'Não há usuários para exibir' }
    </div>
  )
}

export default Page