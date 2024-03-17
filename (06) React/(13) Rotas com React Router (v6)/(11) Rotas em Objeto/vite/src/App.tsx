import { useRoutes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { MainRoutes } from './routes/MainRoutes'

function App() {
  const routes = useRoutes([
    { path: '/', element: <Home /> }
  ]) 

  return (
    <div className='p-4'>
      <header>
        <h1>Título do Site</h1>
      </header>

      <hr />

      <div className='py-4'>
        {/* { routes } */}
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
