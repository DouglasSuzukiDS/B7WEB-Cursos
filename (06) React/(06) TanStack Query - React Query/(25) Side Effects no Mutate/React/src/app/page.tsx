'use client'

import { Post } from '@/types/Post'
import { addPost } from '@/utils/api'
import { usePosts } from '@/utils/queries'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

export default function Page() {

  const posts = usePosts()

  const addMutation = useMutation({
    mutationFn: addPost,
  })

  const handleAddButton = () => {
    addMutation.mutate({
      title: 'Teste',
      body: 'Corpo de teste',
      userId: 7
    }, {
      onSuccess: (data) => {
        // Ir para tela qualquer
      },
      // E onError, onSettled
    })
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-white text-xl">Hello World</h1>

      <div className='border border-white my-3 p-3'>
        <p>Adicionar Novo Post</p>

        <p onClick={ () => addMutation.reset() } >Status: { addMutation.status }</p>


        <button onClick={ handleAddButton }>Adicionar</button>
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
