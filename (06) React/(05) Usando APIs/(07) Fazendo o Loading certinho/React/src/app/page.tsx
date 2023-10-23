'use client'

import { User } from "@/types/User"
import { useEffect, useState } from "react"

const Page = () => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    // setLoading(true)
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        // setLoading(false)
        setUsers(json)
      })
      .catch(() => {
        // setLoading(false)
        console.log('Deu algom erro')
      })
      .finally(() => {
        setLoading(false)
      })

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