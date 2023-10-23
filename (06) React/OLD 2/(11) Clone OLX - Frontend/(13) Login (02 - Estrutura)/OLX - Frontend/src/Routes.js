import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Page } from "./pages/Signin";

export const AppRoutes = () => {
   return(
      <Routes>
         <Route path='/' element={ <Home /> } />
         <Route path='/about' element={ <About /> } />
         <Route path='/signin' element={ <Page /> } />
         <Route path="*" element={ <NotFound /> } />
      </Routes>
   )
}