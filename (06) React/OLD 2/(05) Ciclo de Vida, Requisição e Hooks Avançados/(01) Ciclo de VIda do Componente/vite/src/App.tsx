import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [name, setName]= useState('Shanks')

  useEffect(() => {
    alert('Executor')
  }, [name])

  const handleClick = () => {
    setName('Kaido')
  }

  return (
    <div className="">
      Nome: { name }
      <button onClick={ handleClick } >Clique aqui</button>
    </div>
  )
}

export default App
