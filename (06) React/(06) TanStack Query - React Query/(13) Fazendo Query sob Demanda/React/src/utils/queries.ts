import { useQuery } from "@tanstack/react-query"
import { getPost, getPosts } from "./api"

export const usePosts = (enabled?: boolean) => {
   const query = useQuery({
      queryKey: ['posts'], // Associa a função a essa chave e caso em outro lugar use essa chave, pega a informação dela msm
      queryFn: getPosts,
      //staleTime: Infinity // Infinity // Tempo de deixar as infos obsolutas em milisegundos
      enabled // Executa a queryFn de imadiato ou nao
    })

    return query
}

export const usePost = (id: number) => useQuery({
      queryKey: ['posts', id],
      queryFn: ({ queryKey }) => {
         // return getPost(queryKey[1] as number)

         const post = getPost(id)

         if(post) {
            return post
         } else {
            throw new Error('Post não encontrado')
         }
      }
   })