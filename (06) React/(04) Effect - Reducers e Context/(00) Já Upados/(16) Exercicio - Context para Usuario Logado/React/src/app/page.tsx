'use client'

import { Header } from "@/components/Header"
import { LoggedUserProvider } from "@/contexts/LoggedUser"
import { NameProvider } from "@/contexts/NameContext"

const Page = () => {

  return (

    <div className="container mx-auto">
      <LoggedUserProvider>
        <NameProvider>
          <Header />
        </NameProvider>
      </LoggedUserProvider>
    </div>
  )
}

export default Page