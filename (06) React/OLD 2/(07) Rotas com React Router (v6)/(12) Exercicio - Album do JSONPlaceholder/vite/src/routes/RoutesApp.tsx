import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom"
import App from "../App"
import { AlbumId } from "../pages/AlbumId"
import { Albums } from "../pages/Albums"
import { Photos } from "../pages/Photo"

export const RoutesApp = () => {
   /*const routes = useRoutes([
      { path: '/albums', element: <Albums /> },
      { path: '/albums/:id', element: <AlbumId /> },
      { path: '/albums/:id/photos', element: <Albums /> },
      { path: '/photos/:id', element: <Photos /> }
   ])*/

   return(
      <BrowserRouter>
         <Routes>
            <Route path='/' element = { <App />} />
            <Route path='/albums' element = { <Albums />} />
            <Route path='/albums/:id' element = { <AlbumId />} />
            {/* <Route path='/photos/:id' element = { <Photos />} /> */}
            <Route path='albums/:id/photos/:photoId' element = { <Photos />} />
         </Routes>
      </BrowserRouter>
   )
}