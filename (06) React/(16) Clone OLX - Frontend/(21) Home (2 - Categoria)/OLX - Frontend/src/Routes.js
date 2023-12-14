import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Signin } from "./pages/SignIn";
import { Signup } from "./pages/SignUp";

export const AppRoutes = () => {
   return(
      <Routes>
         <Route path='/' element={ <Home /> } />
         <Route path='/about' element={ <About /> } />
         <Route path='/signin' element={ <Signin /> } />
         <Route path='/signup' element={ <Signup /> } />
         <Route path="*" element={ <NotFound /> } />
      </Routes>
   )
}