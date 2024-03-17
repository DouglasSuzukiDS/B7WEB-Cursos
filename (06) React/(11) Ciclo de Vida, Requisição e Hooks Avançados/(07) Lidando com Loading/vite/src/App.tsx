import { useEffect, useState } from 'react'
import './App.css'
import { Movie } from './types/Movie'

function App() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadMovies()
  }, [])

  /*const loadMovies = () => {
    fetch('https://api.b7web.com.br/cinema/')
      .then((response) => { // Faz a requisição e retorna um JSON
        return response.json()
      })
      .then((json) => { // Recebe o JSON e coloca em movies
        setMovies(json)
      })
  }*/

  const loadMovies = async() => {
    setLoading(true)
    let response = await fetch('https://api.b7web.com.br/cinema/')
    let json = await response.json()

    setLoading(false)
    setMovies(json)
  }

  return (
    <div>
      <button 
        className='block bg-blue-400 p-2 rounded'
        onClick={ loadMovies }>Carregar Filmes</button>

      { loading && 
        <div>Carregando...</div> 
      }

      { !loading && 
        <>
          <div>Total de Filmes: { movies.length }</div> 
          
          <div className='grid grid-cols-6 gap-3'>
            { movies.map((item, index) => (
              <div key={ index }>
                <img src={ item.avatar } alt={ item.titulo } className='w-32 block' />
                { item.titulo }
              </div>
            )) }
          </div>
        </>
      }

      


    </div>
  )
}

export default App
// https://api.b7web.com.br/cinema/