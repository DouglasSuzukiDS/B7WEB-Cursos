'use client'

import { Header } from "@/components/Header"
import { CounountInitialData, CountContext } from "@/contexts/CountContext"

const Page = () => {
 

  return (
    // Context: Permite que a informação seja passada para todos os componentes que o componente pai emgloba
    <div className="container mx-auto">
      <CountContext.Provider value={ CounountInitialData }>
        <Header />
      </CountContext.Provider>
    </div>
  )
}

export default Page