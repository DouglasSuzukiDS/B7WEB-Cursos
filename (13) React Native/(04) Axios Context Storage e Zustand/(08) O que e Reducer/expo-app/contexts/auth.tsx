import { createContext, ReactNode, useState } from "react";

type AuthContextType = null | {
   data: string,
   setData: React.Dispatch<React.SetStateAction<string>>,
}

export const AuthContext = createContext<AuthContextType>(null)

type Props = {
   children: ReactNode
}
export const AuthProvider = ({ children }: Props) => {
   const [data, setData] = useState('Nick')

   return(
      <AuthContext.Provider value={{ data, setData }}>
         { children }
      </AuthContext.Provider>
   )
}