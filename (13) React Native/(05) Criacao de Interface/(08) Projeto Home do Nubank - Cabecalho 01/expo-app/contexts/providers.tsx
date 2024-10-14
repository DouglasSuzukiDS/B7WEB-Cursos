import { ReactNode } from "react"
import { AuthProvider } from "./auth"
import { ThemeProvider } from "./theme"

type Props = {
   children: ReactNode
}

export const Providers = ({ children }: Props) => {
   return(
      <AuthProvider>
         <ThemeProvider>
            { children }
         </ThemeProvider>
      </AuthProvider>
   )
}