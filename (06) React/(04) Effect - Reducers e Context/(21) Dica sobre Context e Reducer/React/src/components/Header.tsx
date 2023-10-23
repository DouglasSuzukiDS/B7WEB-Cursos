import { PostContext } from "@/contexts/PostContext"
import { useContext, useState } from "react"

export const Header = () => {
   const postCTX = useContext(PostContext)

   const [titleInput, setTitleInput] = useState('')
   const [bodyInput, setBodyInput] = useState('')

   const handleInput = () => {
      if(titleInput && bodyInput) {
         //postCTX?.addPost(titleInput, bodyInput)

         postCTX?.dispatch({
            type: 'add', 
            payload: { 
               title: titleInput,
               body: bodyInput
            }
         })

         setTitleInput('')
         
         setBodyInput('')
      }
   }

   return(
      <header>
         <h1 className="text-3xl">
            Titulo da Página
         </h1>

         <div className="max-w-xl flex flex-col gap-3 p-3 my-4 border border-dotted border-gray-400">
            <input type="text"
               placeholder="Digite um tótulo" 
               className="border border-gray-300 p-2 text-black text-xl" 
               value={ titleInput }
               onChange={ e => setTitleInput(e.target.value) } />

            <textarea placeholder="Digite um corpo"
               className="h-24 border border-gray-300 p-2 text-black text-xl"
               value={ bodyInput }
               onChange={ e => setBodyInput(e.target.value) }></textarea>

            <button
               className="bg-blue-500 p-3 text-whit rounded-md"
               onClick={ handleInput }>Adicionar</button>
         </div>
      </header>
   )
}

