import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Page } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export const AppRoutes = () => {
   return(
      <Routes>
         <Route path='/' element={ <Page /> } />
         <Route path='/about' element={ <About /> } />
         <Route path="*" element={ <NotFound /> } />
      </Routes>
   )
}