import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

import { useAppSelector } from './redux/hooks/useAppSelector';
import './App.css';

function App() {
  // const user = useSelector((state: RootState) => state.user)
  
  const user = useAppSelector(state => state.user) // Depois de ter Typado o Reducer
  
  return (
    <div>
      O nome é: { user.name } e tem { user.age } anos. <br />
      Tema: ...

      <hr />
      <input type="text" value={ user.name } />

      <hr />
      <button>Switch Theme</button>
    </div>
  );
}

export default App;