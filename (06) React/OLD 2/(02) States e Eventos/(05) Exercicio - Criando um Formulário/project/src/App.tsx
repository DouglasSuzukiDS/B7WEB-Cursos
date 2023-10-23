import { useState } from 'react';
import './App.css'

const App = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')

  const handleInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName( event.target.value )
  }

  const handleInputLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName( event.target.value )
  }

  const handleInputAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge( event.target.value )
  }

  return (
    <div>
      <div>
        <label>Nome: </label>
        <input type="text" value={ name } onChange={ handleInputName }/>
      </div>

      <div>
        <label>Sobrenome: </label>
        <input type="text" value={ lastName } onChange={ handleInputLastName } />
      </div>

      <div>
        <label>Idade: </label>
        <input type="text" value={ age } onChange={ handleInputAge } />
      </div>

      <hr/>

      <h3>
        Olá <span>{`${name} ${lastName}`}</span>, tudo bem?<br/>
        Você tem <span>{age}</span> anos.
      </h3>
    </div>
  );
}

export default App;