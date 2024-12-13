import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { removeAllListeners } from 'process'

function App() {
  const [name, setName] = useState('Kaido')
  const [age, setAge] = useState(90)
  const [bg, setBg] = useState('#F00')

  const [list, setList] = useState([
    'O rato roeu a roupa do rei de removeAllListeners.',
    'Aqui vai uma frase poética.',
    'A inspiração desse programador é pouca.'
  ])

  const handle20 = () => {
    setAge(20)
    setBg('#0F0')
  }
  
  const handle90 = () => {
    setAge(90)
    setBg('#F00')

  }

  return (
    <div style={{backgroundColor: bg}}>
      <Header name={name} age={age} />

      {age === 90 &&
        <button onClick={handle20}>Tenho 20 anos</button>
      }

      {age === 20 &&
        <button onClick={handle90}>Tenho 90 anos</button>
      }

      <hr/>

      <ul>
        {list.map((frase, index) => (
          <li key={index}>{frase}</li>
        ))}
      </ul>

      <Footer />
    </div>
  );
}

export default App;
