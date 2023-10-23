'use client'

import { Post } from '@/types/Post'
import { usePost, usePosts } from '@/utils/queries'

export default function Page() {
  const posts = usePosts()

  const postItem = usePost(10)

  return (
    <div className="container mx-auto">
      <h1 className="text-white text-xl">Hello World</h1>

      { posts.isLoading && 'Carregando' }
      { !posts.isLoading && posts.isFetching && 'Está recarregando' }

      { posts.data && 
        <ul>
          { posts.data.map((item: Post) => (
            <li key={ item.id }>{ item.title }</li>
          )) }
        </ul>
      }
    </div>
  )
}
