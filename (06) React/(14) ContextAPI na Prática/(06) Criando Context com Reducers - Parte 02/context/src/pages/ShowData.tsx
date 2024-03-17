import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../contexts/Context'

export const ShowData= () => {
   const { name, age } = useContext(Context)

   return (
      <div>
         Tela ShowData de { name } que tem { age } anos.

         <br />
         
         <Link to='/'>Voltar para SignUp</Link>
      </div>
   )
}