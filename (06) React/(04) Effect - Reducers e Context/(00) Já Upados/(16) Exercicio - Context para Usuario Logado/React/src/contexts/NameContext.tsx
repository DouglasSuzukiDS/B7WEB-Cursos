import { ReactNode, createContext, useState } from "react";

// Create Context
type NameContextType = {
   name: string
   setName: (newName: string) => void
}

const initialName = ''
export const NameContext = createContext<NameContextType | null>(null)

// Create Provider

type Props = {
   children: ReactNode
}

export const NameProvider = ({ children }: Props) => {
   const [name, setName] = useState('Luffy')

   return(
      <NameContext.Provider value={{ name, setName }}>
         { children }
      </NameContext.Provider>
   )
}