import { useState } from 'react'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])

  const loadMovies = () => {
    fetch('https://api.b7web.com.br/cinema/')
      .then((response) => { // Faz a requisição e retorna um JSON
        return response.json()
      })
      .then((json) => { // Recebe o JSON e coloca em movies
        setMovies(json)
      })
  }

  return (
    <div>
      <button 
        className='block bg-blue-400 p-2 rounded'
        onClick={ loadMovies }>Carregar Filmes</button>

      Total de Filmes: {movies.length}

    </div>
  )
}

export default App
// https://api.b7web.com.br/cinema/