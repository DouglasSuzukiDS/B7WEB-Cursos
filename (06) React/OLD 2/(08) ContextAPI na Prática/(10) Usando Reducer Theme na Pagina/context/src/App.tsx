import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Context, ContextProvider } from './contexts/Context';
import { ShowData } from './pages/ShowData';
import { SignUp } from './pages/SignUp';

function App() {
  const {state, dispatch} = useContext(Context)

  const handleSwitchTheme = () => {
    if(state.theme.status === 'light') {
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'dark'
        }
      })
    } else {
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'light'
        }
      })
    }
  }

  return (
    // ContextProvider esta no index.tsx por que la esta usando o APP
      <BrowserRouter>
        <div style={{ 
          backgroundColor: state.theme.status === 'light' ? '#C1C7E0' : '#000',
          color: state.theme.status === 'light' ? '#000' : '#C1C7E0'
        }}>
          <h1>Título da Página</h1>
          Tema: { state.theme.status }
          <button onClick={ handleSwitchTheme }>Switch Theme</button>
          <hr />

          <Routes>
            <Route path='/' element={ < SignUp /> } />
            <Route path='/exibir' element={ < ShowData /> } />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
