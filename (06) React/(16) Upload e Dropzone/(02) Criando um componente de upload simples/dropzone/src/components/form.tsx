'use client'

import { ChangeEvent, useState } from "react"

export const Form = () => {
   const [selectedFile, setSelectedFile] = useState<File>()

   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
         const file = e.target.files[0]
         // console.log(file)
         setSelectedFile(file)
      }
   }

   const handleSubmit = () => {

   }

   return (
      <div className="">
         <input
            className="block my-3"
            type="file"
            onChange={handleFileChange} />

         <button
            className="block my-3"
            onClick={handleSubmit}>
            Enviar
         </button>
      </div>
   )
}