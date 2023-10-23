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

  return(
    <div className="">
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