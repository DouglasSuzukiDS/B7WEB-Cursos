import { Post } from "@/types/Post"

export const Posts = async() => {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 3600 } }) 
      // { next: { revalidate: 3600 } } => Mantém em cache com volta de 1 dia
      // { cache: 'no-store' } => Não salva em cache
      // { cache: 'force-cache' } => Salva em cache
   const posts: Post[] = await res.json()

   return(
      <ul>
         { posts.map(item => (
            <li key={item.id}>{item.title}</li>
         )) }
      </ul>
   )
}