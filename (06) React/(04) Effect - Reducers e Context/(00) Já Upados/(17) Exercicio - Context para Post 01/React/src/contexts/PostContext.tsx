import { Post } from "@/types/Post";
import { ReactNode, createContext, useState } from "react";

type PostContextType = {
   posts: Post[]
}

export const PostContext = createContext<PostContextType | null>(null)

export const PostProvider = ({ children }: { children: ReactNode }) => {
   const [posts, setPosts] = useState<Post[]>([])
   
   return(
      <PostContext.Provider value={{ posts }}>
         { children }
      </PostContext.Provider>
   )
}