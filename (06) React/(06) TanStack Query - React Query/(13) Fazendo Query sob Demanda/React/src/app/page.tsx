'use client'

import { Post } from '@/types/Post'
import { usePost, usePosts } from '@/utils/queries'
import { useState } from 'react'

export default function Page() {
  const [canLoadPosts, setCanLoadPosts] = useState(false)

  const posts = usePosts(canLoadPosts)

  const handleLoadPostsButton = () => {
    setCanLoadPosts(true)
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-white text-xl">Hello World</h1>

    <button
      onClick={ handleLoadPostsButton }
      className='border border-white p-3 rounded-md m-3'>
      Carregar Posts
    </button>

      { posts.isInitialLoading && 'Carregando' }
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
