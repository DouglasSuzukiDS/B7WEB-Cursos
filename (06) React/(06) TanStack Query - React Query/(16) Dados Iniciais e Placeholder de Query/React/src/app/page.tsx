'use client'

import { Post } from '@/types/Post'
import { usePost, usePosts } from '@/utils/queries'
import { useState } from 'react'

export default function Page() {
  const limit = 3
  const [page, setPage] = useState(0)

  const posts = usePosts(limit, page * limit)

  const handlePrevButton = () => {
    setPage( page === 0 ? 0: page - 1 )
  }

  const handleNextButton = () => {
    setPage( page + 1 )
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-white text-xl">Hello World</h1>

      <div className="border border-white m-3 p-3">
        <div>Itens por página: { limit }</div>
        <div>Número da página: { page }</div>

        <button
          className='border mx-2 px-2'
          onClick={ handlePrevButton }>Página Anterior</button>

        <button
          className='border mx-2 px-2'
          onClick={ handleNextButton }>Próxima Página</button>
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
