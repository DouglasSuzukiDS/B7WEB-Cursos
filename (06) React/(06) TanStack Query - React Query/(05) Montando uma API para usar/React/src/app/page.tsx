'use client'
import { Post } from '@/types/Post'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function Page() {
  const query = useQuery({
    queryKey: ['posts'], // Associa a função a essa chave e caso em outro lugar use essa chave, pega a informação dela msm
    queryFn: async(): Promise<Post[]> => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
      return result.data
    }
  })


  return (
    <div className="container mx-auto">
      <h1 className="text-white text-xl">Hello World</h1>

      { query.isLoading && 'Carregando' }

      { query.data && 
        <ul>
          { query.data.map(item => (
            <li key={ item.id }>{ item.title }</li>
          )) }
        </ul>
      }
    </div>
  )
}
