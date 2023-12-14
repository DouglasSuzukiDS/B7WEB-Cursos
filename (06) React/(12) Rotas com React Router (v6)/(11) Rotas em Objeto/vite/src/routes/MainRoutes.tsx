import { Route, Routes, useRoutes } from "react-router-dom"
import { About } from "../pages/About"
import { AboutItem } from "../pages/AboutItem"
import { Home } from "../pages/Home"
import { NotFound } from "../pages/NotFound"
import { RequireAuth } from "../RequireAuth"

export const MainRoutes = () => {
   /*return(
      <Routes>
          <Route path='/' element={ <Home /> } />

          <Route path='/sobre' element={  <RequireAuth children={ <About/> } /> } />

          <Route path='/sobre/:slug' element={ <AboutItem /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
   )*/

   return useRoutes([
      { path: '/', element: <Home /> },
      { path: '/sobre', element: <RequireAuth children={ <About /> } /> },
      { path: '/sobre/:slug', element: <AboutItem /> },
      { path: '*', element: <NotFound /> },
   ])

}