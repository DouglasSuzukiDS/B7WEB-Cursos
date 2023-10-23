'use client'

import { Person } from "@/types/Person"
import { useState } from "react"

const Page = () => {
  const [fullName, setFullName] = useState<Person>({ name: 'Eutass', lastName: 'Kidd' })

  const handleClearButton = () => {
    // setFullName({ name: '', lastName: '' })
    const fullNameClone = { ...fullName }
    fullNameClone.name = ''
    setFullName(fullNameClone)
  }
  
  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <input type="text" 
        placeholder="Nome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3"
        value={ fullName.name }
        // onChange={ e => setFullName({ name: e.target.value, lastName: fullName.lastName }) }
        onChange={ e => setFullName({ ...fullName, name: e.target.value }) }
      />

      <input type="text" 
        placeholder="Sobrenome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3"
        value={ fullName.lastName }
        // onChange={ e => setFullName({ name: fullName.name,lastName: e.target.value }) }
        onChange={ e => setFullName({ ...fullName, lastName: e.target.value }) }
      />

      <p>O nome é: { fullName.name } { fullName.lastName }</p>
      
      <button onClick={ handleClearButton }>Limpar</button>
    </div>
  )
}

export default Page