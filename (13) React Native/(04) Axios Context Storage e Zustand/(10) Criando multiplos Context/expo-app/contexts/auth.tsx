import { createContext, ReactNode, useReducer, useState } from "react";
import { User } from "../types/User";

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
         return { ...state, user: action.payload }
         break
   }

   return state
}