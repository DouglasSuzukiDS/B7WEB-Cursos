import { Link, useSearchParams } from "react-router-dom"

export const About = () => {
   const [searchParams, setSearchParams] = useSearchParams()

   const setOrder = (order: 'asc' | 'desc') => {
      searchParams.set('order', order)
      setSearchParams(searchParams)
   }

   return(
      <div>
         Filtro: { searchParams.get('filter') } <br />
         Ordem: { searchParams.get('order') }
         <hr />

         <button onClick={ () => setOrder('asc') }>ASC</button>
         <button onClick={ () => setOrder('desc') }>DESC</button>

         <hr />

         Página Sobre

         <ul>
            <li> <Link to='/sobre/Shanks'>Shanks</Link> </li>
            <li> <Link to='/sobre/Kaido'>Kaido</Link> </li>
         </ul>
      </div>
   )
}