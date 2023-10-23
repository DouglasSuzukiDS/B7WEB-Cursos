'use client'

import { useState } from "react"

const Page = () => {
  const [count, setCount] = useState(0)

  const handleBtnClick = () => {
    setCount(count + 2)
    // O state só muda depois do termino da função
  }
  
  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center">
     <p>{ count }</p>

     <button 
      className="bg-blue-700 text-white rounded p-3" 
      onClick={ handleBtnClick }>+2</button>
    </div>
  )
}

export default Page