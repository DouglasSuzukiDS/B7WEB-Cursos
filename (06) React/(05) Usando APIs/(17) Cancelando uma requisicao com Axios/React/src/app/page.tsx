'use client'
import axios from 'axios'

const Page = () => {
  const controller = new AbortController() // Recurso da Fetch API

  const handleStartRequest = async() => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com', {
        signal: controller.signal
      })
    } catch (error) {
      console.log('Deu algum problema...')
    }
  }

  const handleCancelRequest = () => {
    controller.abort()
  }
  
  return(
    <div className="container mx-auto flex gap-3">
      <button onClick={ handleStartRequest }>Enviar</button>

      <button onClick={ handleCancelRequest }>Cancelar</button>
    </div>
  )
}

export default Page