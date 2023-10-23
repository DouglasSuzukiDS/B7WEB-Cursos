'use client'

import { useEffect, useState } from "react"

const Page = () => {
  const [name, setName] = useState('Shanks')
  const [age, setAge] = useState(35)
  // 1) Definição da Função que vai roda
  // 2) Definição de quando vai rodar
  // 3) Definição do que fazer quando o componente sumir/unload

  /*useEffect(() => { // Aqui o Effect vai rodar toda vez que houver uma renderização
    console.log('Rodou o Effect')
  }) */

  /*useEffect(() => { // Aqui o Effect só ira rodar quando a página for carregada
    console.log('Rodou o Effect')
  }, [])*/ 

  useEffect(() => { // Aqui o Effect rodr quando a página for carregada e quando algum dos states mudarem
    console.log('Rodou o Effect')
  }, [age])

  const handleChangeName = () => {
    setName('Shanks, o Ruivo')
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-blue-600">
      <p>O nome é { name }, e tem { age } anos.</p>
      <hr/>

      <button className="border border-blue-400 m-3 p-3"
        onClick={ handleChangeName }>Mudar nome</button>

      <button className="border border-blue-400 m-3 p-3"
        onClick={ () => setName('Luffy') }>Mudar para Luffy</button>

      <button className="border border-blue-400 m-3 p-3"
        onClick={ () => setAge(10) }>Mudar para 10</button>

      <button className="border border-blue-400 m-3 p-3"
        onClick={ () => setAge(35) }>Mudar para 35</button>
    </div>
  )
}

export default Page