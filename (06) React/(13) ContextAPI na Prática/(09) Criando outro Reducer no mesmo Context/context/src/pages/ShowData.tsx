import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../contexts/Context'

export const ShowData= () => {
   const { state, dispatch } = useContext(Context)

   return (
      <div>
         <h3>Tela ShowData</h3>

         { state.user.name &&
            <>
            O nome é: { state.user.name } <br />
            E tem { state.user.age } anos.
            </>
         }

         { !state.user.name && 'Não há informações' }

         <br />
         
         <Link to='/'>Voltar para SignUp</Link>
      </div>
   )
}