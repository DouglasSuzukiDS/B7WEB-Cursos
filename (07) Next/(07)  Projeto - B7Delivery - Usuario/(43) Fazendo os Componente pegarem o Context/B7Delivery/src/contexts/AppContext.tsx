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

// A princípio o problema que você tem nem é com o Next, pois seu código não iria funcionar nem com React puro, você não pode usar os dados do context no mesmo lugar onde você usa o provider, afinal quem transmite as informações para o useContext é o provider, então se você não tiver o código que chama o useContext dentro do provider correspondente, os dados não vão ser trasmitidos, você deveria ter convertido a página num componente, e ai usado o provider, e colocado o componente que representa a página lá dentro como children do provider.