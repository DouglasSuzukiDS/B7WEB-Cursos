'use client'

import { ReactNode, createContext, useContext, useState } from 'react'
import { Tenant } from '../types/Tenant'

type AppContextType = {
   tenant: Tenant | null
   setTenant: (newTenant: Tenant) => void
}

const defaultValues: AppContextType = {
   tenant: null,
   setTenant: () => null
}

const AppContext = createContext<AppContextType>(defaultValues)

export const useAppContext = () => useContext(AppContext)

type Props = {
   children: ReactNode
}

export const AppContextProvider = ({ children }: Props) => {
   const [tenant, setTenant] = useState<Tenant | null>(null)

   return(
      <AppContext.Provider value={{ tenant, setTenant }}>
         { children }
      </AppContext.Provider>
   )
}