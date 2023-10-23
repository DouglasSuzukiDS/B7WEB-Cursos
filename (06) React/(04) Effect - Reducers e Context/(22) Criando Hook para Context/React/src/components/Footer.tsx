import { PostContext, usePosts } from "@/contexts/PostContext"
import { useContext } from "react"

export const Footer = () => {
   // const postCtx = useContext(PostContext)

   // Usando o Hook Própio
   const postCtx = usePosts()

   return(
      <footer>
         Total de posts: { postCtx?.posts.length }
      </footer>
   )
}