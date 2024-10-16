'use client'

import { Post } from "@/types/Post"
import { useEffect, useState } from "react"

export const PostsClient = () => {
   const [loading, setLoading] = useState(false)
   const [posts, setPosts] = useState<Post[]>([])

   const getPosts = async() => {
      setLoading(true)
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json()
      setPosts(data)
      setLoading(false)
   }

   useEffect(() => {
      // getPosts()
   }, [])
   
   if(loading) {
      return <p>Carregando...</p>
   }
   
   return(
      <>
         <button onClick={ getPosts }>Carregar Posts</button> 
         {/* Usado para quando a requisição depende d euma interação com o usuário */}

         <ul>
            { posts.map(item => (
               <li key={item.id}>{item.title}</li>
            )) }
         </ul>
      </>
   )
}