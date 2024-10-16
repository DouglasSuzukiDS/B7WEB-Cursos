import { getPosts } from "@/actions/get-posts"

export const Posts = async() => {
   // { next: { revalidate: 3600 } } => Mantém em cache com volta de 1 dia
   // { cache: 'no-store' } => Não salva em cache
   // { cache: 'force-cache' } => Salva em cache
   const posts = await getPosts()

   return(
      <ul>
         { posts.map(item => (
            <li key={item.id}>{item.title}</li>
         )) }
      </ul>
   )
}