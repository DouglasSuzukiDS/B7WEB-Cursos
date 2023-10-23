import { PostActions, PostReducer } from "@/reducers/PostReducer";
import { Post } from "@/types/Post";
import { Dispatch, ReactNode, createContext, useContext, useEffect, useReducer, useState } from "react";

const STORAGE_KEY = 'postContextContent'

type PostContextType = {
   posts: Post[]
   addPost?: (title: string, body: string) => void
   removePost?: (id: number) => void
   dispatch: Dispatch<PostActions>
}

export const PostContext = createContext<PostContextType | null>(null)

export const PostProvider = ({ children }: { children: ReactNode }) => {
   /*const [posts, setPosts] = useState<Post[]>([])
   
   const addPost = (title: string, body: string) => {
      setPosts([
         ...posts, { id: posts.length, title, body }
      ])
   }

   
   return(
      <PostContext.Provider value={{ posts, addPost }}>
         { children }
      </PostContext.Provider>
   )*/
   
   // Usando Reducer
   const [posts, dispatch] = useReducer(
      PostReducer, 
       JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') // Se não encontrar ele substitui por um []
   )

   const addPost = (title: string, body: string) => {
      dispatch({
         type: 'add',
         payload: { title, body }
      })
   }

   const removePost = (id: number) => {
      dispatch({ type: 'remove', payload: { id } })
   }

   useEffect(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
   }, [posts])

   return(
      <PostContext.Provider value={{ posts, dispatch }}>
         { children }
      </PostContext.Provider>
   )
}

export const usePosts = () => useContext(PostContext)