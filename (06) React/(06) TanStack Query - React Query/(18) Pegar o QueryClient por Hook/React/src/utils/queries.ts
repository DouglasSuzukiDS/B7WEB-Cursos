import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getPost, getPosts, getUsers } from "./api"
// import { queryClient } from "./QueryClient"

export const usePosts = () => {
   const query = useQuery({
      queryKey: ['posts'], // Associa a função a essa chave e caso em outro lugar use essa chave, pega a informação dela msm
      queryFn: () => getPosts(),
      //staleTime: Infinity // Infinity // Tempo de deixar as infos obsolutas em milisegundos
      // initialData: postsInitialData
      //placeholderData: postsInitialData
   })

   return query
}

export const usePost = (id: number) => useQuery({
   queryKey: ['posts', id],
   queryFn: () => getPost(id)
})


export const useUsers = () => {
   const query = useQuery({
      queryKey: ['users'],
      queryFn: getUsers
   })

   return query
}

export const useUsersPrefetch = async() => {
   const queryClient = useQueryClient()
   
   await queryClient.prefetchQuery({
      queryKey: ['users'],
      queryFn: getUsers
   })
}