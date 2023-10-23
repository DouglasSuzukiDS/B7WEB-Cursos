'use client'

import { api } from "@/utils/api"

const Page = () => {
  const handleAddPost = async() => {
    const response = await api.post('/posts', {
      userId: 98,
      title: 'Título do Post',
      body: 'Corpo do post'
    })
     
    console.log(response)

    if(response.data.id) {
      console.log('Inseriu')
    } else {
      console.log('Não inseriu')
    }
  }
  
  return(
    <div className="container mx-auto">
      <button onClick={ handleAddPost }>Inserir Post</button>
    </div>
  )
}

export default Page