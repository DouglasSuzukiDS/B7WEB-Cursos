import { useState } from "react"

const App = () => {
  const [name, setName] = useState('Kaido')
  
  const handleClick = () => {
    setName('Shanks')
  }

  return (
    <div>
      O nome é: { name }
      <button onClick={handleClick}>Clique Aqui</button>
    </div>
  )
}

export default App