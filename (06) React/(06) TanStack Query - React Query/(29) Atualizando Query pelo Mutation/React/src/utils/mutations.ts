import { useMutation } from "@tanstack/react-query"
import { addPost } from "./api"
import { queryClient } from "./QueryClient"
import { Post } from "@/types/Post"

export const useAddPost = () => {
   const mutation = useMutation({
      mutationFn: addPost,
      onSuccess: (newPost: Post) => {
         const posts = queryClient.getQueryData(['posts']) as Post[]

         queryClient.setQueryData(['posts'], [newPost, ...posts])
      }
   })

   return mutation
}