import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

import { useAppSelector } from './redux/hooks/useAppSelector';
import './App.css';
import { useDispatch } from 'react-redux';
import { setAge, setName } from './redux/reducers/useReducer';
import { setThemeStatus } from './redux/reducers/themeReducer';

function App() {
  // const user = useSelector((state: RootState) => state.user)
  
  const dispatch = useDispatch()
  const user = useAppSelector(state => state.user) // Depois de ter Typado o Reducer
  const theme = useAppSelector(state => state.theme)

  const changeName = (newName: string) => dispatch(setName(newName))
  
  const changeAge = (newAge: number) => dispatch(setAge(newAge))

  const switchTheme = (newTheme: string) => dispatch(setThemeStatus(newTheme))

  const handleNameInput = ((e: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch( setName(e.target.value) )
    changeName(e.target.value)
  })  

  const handleAgeInput = ((e: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch( setAge( parseInt(e.target.value) ) )
    if(e.target.value == '') { // Para evitar que o campo Age de NaN
      changeAge(parseInt('0'))
    } else {
      changeAge(( parseInt(e.target.value) ))
    }
  })

  const handleSwitchTheme = () => {
    switchTheme(theme.status === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      O nome é: { user.name } e tem { user.age } anos. <br />
      Tema: { theme.status }

      <hr />
      <input type="text" value={ user.name } onChange={ handleNameInput } />

      <input type="text" value={ user.age } onChange={ handleAgeInput } />

      <hr />
      <button onClick={ handleSwitchTheme }>Switch Theme</button>
    </div>
  );
}

export default App;