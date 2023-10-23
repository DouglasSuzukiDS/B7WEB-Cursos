'use client'

import { Post } from '@/types/Post'
import { invalidatePosts, usePost, usePosts, useUsersPrefetch } from '@/utils/queries'
import { useState } from 'react'

export default function Page() {
  useUsersPrefetch()

  const posts = usePosts()

  const handleInsertNewPostButton = () => {
    invalidatePosts()
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-white text-xl">Hello World</h1>

      <div className='my-3 p-3 border border-white'>
        <p className='block'>Área de inserção de novo Post</p>
        <button onClick={ handleInsertNewPostButton }>Inserir novo Post</button>
      </div>

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
