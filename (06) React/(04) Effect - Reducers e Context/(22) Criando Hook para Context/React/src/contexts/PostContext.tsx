import { PostActions, PostReducer } from "@/reducers/PostReducer";
import { Post } from "@/types/Post";
import { Dispatch, ReactNode, createContext, useContext, useReducer, useState } from "react";

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
   const [posts, dispatch] = useReducer(PostReducer, [])

   const addPost = (title: string, body: string) => {
      dispatch({
         type: 'add',
         payload: { title, body }
      })
   }

   const removePost = (id: number) => {
      dispatch({ type: 'remove', payload: { id } })
   }

   return(
      <PostContext.Provider value={{ posts, dispatch }}>
         { children }
      </PostContext.Provider>
   )
}

export const usePosts = () => useContext(PostContext)