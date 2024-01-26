import { createContext } from "react"
import { reducer } from "./reducer"
import { ContextType, DataType, ProviderType } from "./types"
import { useReducer } from "react"

const initialState: DataType = {
   tenant: null
}

export const AppContext = createContext<ContextType>({
   state: initialState,
   dispatch: () => {  }
})

export const Provider = ({ children }: ProviderType) => {
   const [state, dispatch] = useReducer(reducer, initialState)

   const value = { state, dispatch }

   return(
      <AppContext.Provider value={ value }>
         { children }
      </AppContext.Provider>
   )
}