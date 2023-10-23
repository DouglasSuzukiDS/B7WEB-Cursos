import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../contexts/Context'

export const SignUp = () => {
   const { name, age } = useContext(Context)

   return (
      <div>
         Tela SignUp de { name } que tem { age } anos.
         <br />
         
         <Link to='/exibir'>Ir para ShowData</Link>
      </div>
   )
}