import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ContextProvider } from './contexts/Context';
import { ShowData } from './pages/ShowData';
import { SignUp } from './pages/SignUp';

function App() {
  return (
    // Assim toda a aplicação tem acesso aos dados
    <ContextProvider> 

      <BrowserRouter>
        <h1>Título da Página</h1>
        <hr />

        <Routes>
          <Route path='/' element={ < SignUp /> } />
          <Route path='/exibir' element={ < ShowData /> } />
        </Routes>
      </BrowserRouter>

    </ContextProvider>
  );
}

export default App;
