'use client'

import { useEffect } from "react"

const Page = () => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        console.log(json)
      })
  }, [])

  return(
    <div className="">
      <h1 className="text-3xl">Lista de usuários</h1>
    </div>
  )
}

export default Page