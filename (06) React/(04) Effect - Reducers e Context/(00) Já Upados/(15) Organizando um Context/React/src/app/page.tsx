'use client'

import { Header } from "@/components/Header"
import { CountProvider } from "@/contexts/CountContext"
import { useState } from "react"

const Page = () => {

  return (
    // Context: Permite que a informação seja passada para todos os componentes que o componente pai emgloba
    <div className="container mx-auto">
      <CountProvider>
        <Header />
      </CountProvider>
    </div>
  )
}

export default Page