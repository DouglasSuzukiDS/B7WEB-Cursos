import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { User } from "../types/User";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextType = null | {
   data: AuthData,
   dispatch: React.Dispatch<AuthReducerAction>,
}

export const AuthContext = createContext<AuthContextType>(null)

const initialState: AuthData = {
   user: null
}

type Props = {
   children: ReactNode
}
export const AuthProvider = ({ children }: Props) => {
   const [data, dispatch] = useReducer(AuthReducer, initialState)

   useEffect(() => {
      AsyncStorage.getItem('authuser')
         .then(value => {
            if(value !== null) {
               dispatch({ 
                  type: 'SET_USER',
                  payload: JSON.parse(value) 
               })
            }
         })
   }, [])

   return(
      <AuthContext.Provider value={{ data, dispatch }}>
         { children }
      </AuthContext.Provider>
   )
}

type AuthData = {
   user: User | null
}

type AuthReducerAction = {
   type: 'SET_USER',
   payload: User
}

const AuthReducer = (state: AuthData, action: AuthReducerAction): AuthData => {
   switch(action.type) {
      case 'SET_USER':
         const valueToStorage = JSON.stringify(action.payload)
         AsyncStorage.setItem('authuser', valueToStorage)

         return { ...state, user: action.payload }
         break
   }

   return state
}