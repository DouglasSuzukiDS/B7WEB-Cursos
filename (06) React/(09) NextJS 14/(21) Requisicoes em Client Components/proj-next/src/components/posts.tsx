import { Post } from "@/types/Post"

export const Posts = async() => {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
   const posts: Post[] = await res.json()

   return(
      <ul>
         { posts.map(item => (
            <li key={item.id}>{item.title}</li>
         )) }
      </ul>
   )
}