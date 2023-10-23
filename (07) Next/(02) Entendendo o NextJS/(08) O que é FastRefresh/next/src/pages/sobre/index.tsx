import { useState } from 'react'

const Sobre = () => {
   const [contador, setContador] = useState(19)

   const handleContadorBtn = () => {
      setContador(contador + 1)
   }

   return(
      <div>
         <h1>Sobre ({contador})</h1>

         <ul>
            <li> <a href="/sobre/Nick">Nick</a> </li>
            <li> <a href="/sobre/Tonhao">Tonhao</a> </li>
         </ul>

         <button onClick={ handleContadorBtn }>Aumentar</button>
      </div>
   )
} 

export default Sobre
