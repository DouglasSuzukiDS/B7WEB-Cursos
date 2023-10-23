import React from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { Route } from "react-router-dom"

export const PrivateRoute = ({ children, ...rest }) => {
   const history = useHistory()
   const token = useSelector(state => state.user.token)

   if(!token || token === '') {
      history.push('/login')
      return null
   }
   return(
      <Route { ...rest }>
         { children }
      </Route>
   )
}