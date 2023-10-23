import { LoggedUserContext } from "@/contexts/LoggedUser"
import { NameContext } from "@/contexts/NameContext"
import { useContext } from "react"

export const Header = () => {
   const nameCTX = useContext(NameContext)

   const handleChangeName = () => {
      nameCTX?.name === 'Luffy' ? nameCTX?.setName('Shanks') : nameCTX?.setName('Luffy')
   }

   // Resolução
   const loggedUserCtx = useContext(LoggedUserContext)

   const handleLogout = () => {
      loggedUserCtx?.setName('')
   }

   return(
      <header>
         <h1 className="text-3xl">
            Titulo da Página
         </h1>

         <p className="my-3">
            {  nameCTX?.name === 'Luffy' ?
               `O nome no Context que eu criei é: ${ nameCTX?.name }` :
               `Mas agora o novo nome no Context é: ${ nameCTX?.name }` 
            }
         </p>

         <button
            className="border border-blue-300 bg-blue-600 rounded-md font-bold p-3 my-3"
            onClick={ handleChangeName }>Mudar nome</button>

            { loggedUserCtx?.name &&
               <>
                  <p className="my-3">
                     Usuário Logado: { loggedUserCtx?.name }
                  </p>
                  
                  <button
                     onClick={ handleLogout }>
                     Sair
                  </button>
               </>
            }

            { !loggedUserCtx || loggedUserCtx.name === '' &&
               <p className="my-3">
                  Usuário deslogado
               </p> 
            }

    
      </header>
   )
}