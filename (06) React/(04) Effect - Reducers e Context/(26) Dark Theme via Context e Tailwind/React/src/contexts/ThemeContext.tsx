import { ReactNode, createContext, useContext, useEffect, useState } from "react"

const STORAGE_KEY = 'themeContextKey'

type ThemeContext = {
   theme: string
   setTheme: (newTheme: string) => void
}

export const ThemeContext = createContext<ThemeContext | null>(null)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
   const [theme, setTheme] = useState(
      localStorage.getItem(STORAGE_KEY) || 'light'
   )

   useEffect(() => {
      if(theme === 'dark') {
         document.documentElement.classList.add('dark')
      } else {
         document.documentElement.classList.remove('dark')
      }
      
      localStorage.setItem(STORAGE_KEY, theme)
   }, [theme])

   return(
      <ThemeContext.Provider value={{ theme, setTheme }}>
         { children }
      </ThemeContext.Provider>
   )
}

export const useTheme = () => useContext(ThemeContext)