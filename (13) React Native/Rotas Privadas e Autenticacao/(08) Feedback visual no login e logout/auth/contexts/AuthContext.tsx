import AsyncStorage from "@react-native-async-storage/async-storage"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { sleep } from "../utils/sleep"

type AuthContextData = {
   loading: boolean
   isAuthenticated: boolean
   signIn: () => void
   signOut: () => void
}

const AuthContext = createContext<AuthContextData | undefined>(undefined)

type AuthProviderProps = {
   children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
   const [isAuthenticated, setIsAuthenticated] = useState(false)
   const [loading, setLoading] = useState(true)

   const signIn = async () => {
      setLoading(true)
      await sleep(2000)

      await AsyncStorage.setItem('@auth', 'true')

      setIsAuthenticated(true)

      setLoading(false)
   }

   const signOut = async () => {
      setLoading(true)
      await sleep(2000)

      await AsyncStorage.removeItem('@auth')

      setIsAuthenticated(false)

      setLoading(false)
   }

   useEffect(() => {
      const loadStorage = async () => {
         const saved = await AsyncStorage.getItem('@auth')

         if (saved === 'true') {
            setIsAuthenticated(true)
         } else {
            setIsAuthenticated(false)
         }

         await sleep(2000)
         setLoading(false)
      }

      loadStorage()
   }, [])

   return (
      <AuthContext.Provider value={{ loading, isAuthenticated, signIn, signOut }}>
         {children}
      </AuthContext.Provider>
   )
}

export const useAuth = (): AuthContextData => {
   const context = useContext(AuthContext)

   if (!context) {
      throw new Error('Usou useAuth antes de definir o AuthContext')
   }

   return context
}