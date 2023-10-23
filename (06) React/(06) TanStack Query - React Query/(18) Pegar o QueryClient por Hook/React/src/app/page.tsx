'use client'

import { Post } from '@/types/Post'
import { usePost, usePosts, useUsersPrefetch } from '@/utils/queries'
import { useState } from 'react'

export default function Page() {
  useUsersPrefetch()

  const posts = usePosts()

  return (
    <div className="container mx-auto">
      <h1 className="text-white text-xl">Hello World</h1>

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
