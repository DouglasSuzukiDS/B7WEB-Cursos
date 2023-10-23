'use client'

import { useEffect, useState } from "react"

const Page = () => {
  const [firstName, setFirstName] = useState('Monkey')
  const [lastName, setlastName] = useState('D. Luffy')
  // const [fullName, setFullName] = useState('')
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
    // setFullName(`${firstName} ${lastName}`) // Forma Antiga
  }, [firstName, lastName])

  const fullName = `${ firstName } ${ lastName }`

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-blue-600">
      {/* <p>O nome é { firstName } { lastName }</p> */}

      <p>O nome é { fullName }</p>

      <hr/>

      <button className="border border-blue-400 m-3 p-3"
        onClick={ () => setFirstName('Garp') }>Mudar nome</button>


    </div>
  )
}

export default Page