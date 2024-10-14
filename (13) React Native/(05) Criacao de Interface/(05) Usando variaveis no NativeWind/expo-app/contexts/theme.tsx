import { createContext, ReactNode, useReducer, useState } from "react";

type ThemeContextType = null | {
   theme: string
   setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = createContext<ThemeContextType>(null)

type Props = {
   children: ReactNode
}
export const ThemeProvider = ({ children }: Props) => {
   const [theme, setTheme] = useState('light')

   return(
      <ThemeContext.Provider value={{ theme, setTheme }}>
         { children }
      </ThemeContext.Provider>
   )
}