'use client'

import { Header } from "@/components/Header"
import { CounountInitialData, CountContext } from "@/contexts/CountContext"
import { useState } from "react"

const Page = () => {
  const [onlineCount, setOnlineCount] = useState(92)

  return (
    // Context: Permite que a informação seja passada para todos os componentes que o componente pai emgloba
    <div className="container mx-auto">
      <CountContext.Provider value={ { onlineCount, setOnlineCount } }>
        <Header />
      </CountContext.Provider>
    </div>
  )
}

export default Page