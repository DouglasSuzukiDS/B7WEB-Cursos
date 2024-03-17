import { Link } from "react-router-dom"

export const About = () => {
   return(
      <div>
         Página Sobre

         <ul>
            <li> <Link to='/sobre/Shanks'>Shanks</Link> </li>
            <li> <Link to='/sobre/Kaido'>Kaido</Link> </li>
         </ul>
      </div>
   )
}