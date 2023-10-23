'use client'

import { Square } from "@/components/Square"
import { useState } from "react"

const Page = () => {
  const [show, setShow] = useState(false)
  
  // 1) Definição da Função que vai roda
  // 2) Definição de quando vai rodar
  // 3) Definição do que fazer quando o componente sumir/unload

  return (
    <div className="">
      <button onClick={ () => setShow(!show) }>
        Mostrar / Ocultar
      </button>

      { show && <Square /> }
    </div>
  )
}

export default Page