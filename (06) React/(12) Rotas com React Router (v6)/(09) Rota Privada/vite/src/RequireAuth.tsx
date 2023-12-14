import { Navigate, useNavigate } from "react-router-dom"

type Props = {
   children: JSX.Element
}

export const RequireAuth = ({ children }: Props) => {
   const isAuth = true
   const navigate = useNavigate()

   // if(isAuth) {
   //    return children
   // } else {
   //    /*navigate('/')
   //    return null*/

   //    return <Navigate to='/login' />
   // }

   if(!isAuth) {
      return <Navigate to='/login' />
   }

   return children
}