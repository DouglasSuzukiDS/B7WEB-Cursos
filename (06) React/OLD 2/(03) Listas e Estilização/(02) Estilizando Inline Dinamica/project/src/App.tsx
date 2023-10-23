import { useState } from "react"

const App = () => {
  const [clicked, setClicked] = useState(false)
  const [color, setColor] = useState('F00')
  const [padding, setPadding] = useState(0)

  const handleClick = () => {
    // setClicked(true)
    setColor('#0F0')
    setPadding(20)
  } 
  
  return (
    <div>
      <button 
        onClick={ handleClick }
        style=
          {{ 
            // backgroundColor: clicked ? '#00F' : '#F00',
            backgroundColor: color ,
            color: '#FFF', border: '0', padding
          }}>
        Clique aqui
      </button>
    </div>
  )
}

export default App