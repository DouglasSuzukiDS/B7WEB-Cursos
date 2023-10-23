import { PostContext } from "@/contexts/PostContext"
import { useContext } from "react"

export const PostList = () => {
   const postCtx = useContext(PostContext)

   const handleRemveButton = (id: number) => {
      // postCtx?.removePost(id)

      // Mandando o Dispatch para o Context
      postCtx?.dispatch({
         type: 'remove', payload: { id }
      })
   }

   return(
      <div>
         { postCtx?.posts.map(item => (
            <div 
               className="p-3 border-b border-gray-500"
               key={ item.id }>

               <div className="text-xl font-bold mb-2">
                  { item.title }
               </div>

               <div className="text-sm">{ item.body }</div>

               {/* <button onClick={ () => postCtx.removePost(item.id) }>[ remover ]</button> */}
               <button onClick={ () => handleRemveButton(item.id) }>[ remover ]</button>
            </div>   
         )) }
      </div>
   )
}