import './App.css'
import { MainRoutes } from './routes/MainRoutes'

function App() {
  return (
    <div className='p-4'>
      <header>
        <h1>Título do Site</h1>
      </header>

      <hr />

      <div className='py-4'>
        <MainRoutes />
      </div>
      <hr />

      <footer>
        Todos os  direitos reservados.
      </footer>
    </div>
  )
}

export default App
