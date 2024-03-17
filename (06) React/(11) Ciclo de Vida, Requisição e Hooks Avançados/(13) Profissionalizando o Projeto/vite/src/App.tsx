import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'
import { PostForm } from './components/PostForm'
import { PostItem } from './components/PostItem'
import { Post } from './types/Post'


function App() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    setLoading(true)
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()
    setPosts(json)
    setLoading(false)
  }

  /*const handleAddClick = async () => {
    if (addTitleText && addBodyText) {
       let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
             title: addTitleText,
             body: addBodyText,
             userId: 1
          }),
          headers: {
             'Content-Type': 'application/json'
          }
       })

       let json = await response.json()

       console.log(json)

       if (json.id) {
          alert('Post adicionado com sucesso')
       } else {
          alert('Ocorreu algum erro')
       }

    } else {
       alert('Preencha os dados')
    }
  }*/

  const handleAddPost = async(title: string, body: string) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({ title, body, userId: 1 }),
      headers: { 'Content-Type': 'application/json' }
    })

    let json = await response.json()

    console.log(json)

    if (json.id) {
      alert('Post adicionado com sucesso')
    } else {
      alert('Ocorreu algum erro')
    }
  }

  return (
    <div className='p-5'>

      {loading &&
        <div>Carregando...</div>
      }

      <PostForm onAdd={handleAddPost} />

      {!loading && posts.length > 0 &&
        <>
          <div>Total de Posts: {posts.length}</div>

          <div>
            {posts.map((item, index) => (
              <PostItem data={item} />
            ))}
          </div>
        </>
      }

      {!loading && posts.length === 0 &&
        <div>Não há posts para exibir</div>
      }
    </div>
  )
}

export default App
// https://api.b7web.com.br/cinema/