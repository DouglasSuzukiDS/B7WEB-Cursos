import { createContext } from "react";

type ContextType = {
   name: string
   age: number
}

const initialState = {
   name: 'Shanks O Ruivo ',
   age: 90
}

export const Context = createContext<ContextType>(initialState)

// export const ContextProvider: React.FC = ({ children }) => { // Forma como no vídeo dando erro

// Como informado na ajuda da aula
export const ContextProvider = ({ children }: React.PropsWithChildren) => {
   return(
      <Context.Provider value={ initialState }>
         { children }
      </Context.Provider>
   )
}

// Context seria como variaveis globais onde qualquer componente pode ter acesso a essas variaveis