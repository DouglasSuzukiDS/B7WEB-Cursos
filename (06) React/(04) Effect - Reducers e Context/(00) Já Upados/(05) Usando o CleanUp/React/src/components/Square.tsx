import { useEffect } from "react"

export const Square = () => {
   useEffect(() => {
      console.log('Effect - Conectado')
      window.addEventListener('scroll', () => {})

      return () => { // Server para remover requisitos de uma ação feito com o Effect
         console.log('CleanUp - Desconectado')
         window.removeEventListener('scroll', () => {})

      }
   })

   return(
      <div className="w-40 h-40 bg-red-400">

      </div>
   )
}