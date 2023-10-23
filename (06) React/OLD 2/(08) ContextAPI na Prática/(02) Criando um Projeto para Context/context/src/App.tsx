import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ShowData } from './pages/ShowData';
import { SignUp } from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <h1>Título da Página</h1>
      <hr />

      <Routes>
        <Route path='/' element={ < SignUp /> } />
        <Route path='/exibir' element={ < ShowData /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
