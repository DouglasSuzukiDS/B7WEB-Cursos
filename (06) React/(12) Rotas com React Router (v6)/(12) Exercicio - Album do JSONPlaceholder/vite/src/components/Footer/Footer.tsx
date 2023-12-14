import { Link } from "react-router-dom"
import { Github } from "../Icons/Github"
import { Linkedin } from "../Icons/Linkedin"

export const Footer = () => {

   return(
      <footer className="flex justify-center align-middle font-bold">
         <hr />
         <h1 className="text-gray-600 flex justify-center align-middle">
            Codado com <span className="text-red-600 px-1">❤</span> por <span className="text-sky-600 px-1 hover:opacity-80">
               <a href='https://www.linkedin.com/in/douglas-suzuki'>Doug</a>
            </span>

            <a href="https://www.linkedin.com/in/douglas-suzuki" target='_blank' className={'w-6 mx-1 flex justify-center align-middle'} >
               <Linkedin  fill='#4b5563' w='24' className='hover:opacity-80' />
            </a>

            <a href="https://github.com/DouglasSuzukiDS" target='_blank' className={'w-6 mx-1 flex justify-center align-middle'} >
               <Github fill='#4b5563' w='24' className='hover:opacity-80' /> 
            </a>

         </h1>
      </footer>
   )
}