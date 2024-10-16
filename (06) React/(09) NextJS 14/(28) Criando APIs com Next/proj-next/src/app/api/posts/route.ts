import { Post } from "@/types/Post"

// Next 14 => Requisições GET são cacheadas por padrão
// Next 15 => Requisições GET não são cacheadas por padrão

export const dynamic = 'force-dynamic' // Para Next 14 Não faz o cacheamento
// export const dynamic = 'force-static' // Para Next 15 faz o cacheamento

export async function GET(request: Request) {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 3600 } }) 
   const posts: Post[] = await res.json()

   return Response.json({ posts })
}

export async function POST(request: Request) {

}