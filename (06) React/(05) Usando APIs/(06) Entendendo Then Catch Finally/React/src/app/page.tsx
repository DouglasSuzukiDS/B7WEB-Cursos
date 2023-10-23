'use client'

import { User } from "@/types/User"
import { useEffect, useState } from "react"

const Page = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    console.log('Etapa 01')
    console.log('Etapa 02')
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        // console.log(json)
        console.log('Etapa 03')
        setUsers(json)
      })
      .catch(() => {
        console.log('Deu algom erro')
      })
      .finally(() => {
        console.log('Terminou a requisição')
      })

      console.log('Etapa 04')
  }, [])

  return(
    <div className="">
      <h1 className="text-3xl">Lista de usuários</h1>

      { users.length <= 0 && 'Carregando' }

      { users.length > 0 && 
        <ul>
          { users.map(item => (
            <li key={ item.id }>{ item.name } ({ item.address.city })</li>
          )) }
        </ul>
      }
    </div>
  )
}

export default Page