'use client'

import { useState } from "react"

const Page = () => {
  const [count, setCount] = useState(0)

  const handleBtnClick = () => {
    // O state só muda depois do termino da função
    setCount(count + 2)
    setCount(c => c + 2) // O 'c' pega o valor que está na memoria esperando a função terminar para ser renderizado
    setCount(c => c + 2)
  }
  
  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center">
     <p>{ count }</p>

     <button 
      className="bg-blue-700 text-white rounded p-3" 
      onClick={ handleBtnClick }>+6</button>
    </div>
  )
}

export default Page