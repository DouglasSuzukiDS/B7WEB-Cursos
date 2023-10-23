import { useQuery } from "@tanstack/react-query"
import { getPost, getPosts } from "./api"

export const usePosts = (limit: number, start: number) => {
   const query = useQuery({
      queryKey: ['posts', { limit, start }], // Associa a função a essa chave e caso em outro lugar use essa chave, pega a informação dela msm
      queryFn: () => getPosts(limit, start),
      //staleTime: Infinity // Infinity // Tempo de deixar as infos obsolutas em milisegundos
   })

   return query
}

export const usePost = (id: number) => useQuery({
   queryKey: ['posts', id],
   queryFn: () => getPost(id)
})