'use client'

import { Post } from '@/types/Post'
import { useAddPost } from '@/utils/mutations'
import { usePosts } from '@/utils/queries'

export default function Page() {

  const posts = usePosts()

  const addPost = useAddPost()

  const handleAddButton = async() => {
    const data = {
      title: 'Teste',
      body: 'Corpo de teste',
      userId: 7
    }

    addPost.mutate(data)
    
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-white text-xl">Hello World</h1>

      <div className='border border-white my-3 p-3'>
        <p>Adicionar Novo Post</p>

        <p onClick={ () => addPost.reset() } >Status: { addPost.status }</p>


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
