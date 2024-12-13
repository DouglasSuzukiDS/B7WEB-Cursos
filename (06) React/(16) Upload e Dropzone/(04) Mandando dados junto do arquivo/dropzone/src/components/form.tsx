'use client'

import { ChangeEvent, useState } from "react"

export const Form = () => {
   const [selectedFile, setSelectedFile] = useState<File>()
   const [legendField, setLegendField] = useState('')

   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
         const file = e.target.files[0]
         // console.log(file)
         setSelectedFile(file)
      }
   }

   const handleSubmit = async () => {
      if (selectedFile) {
         const formData = new FormData()
         formData.append('file', selectedFile)
         formData.append('legend', legendField)

         const req = await fetch('https://b7web.com.br/uploadtest/', {
            method: 'POST',
            body: formData,
         })

         const json = await req.json()

         console.log(json)
      }
   }

   return (
      <div className="">
         <input
            className="block my-3"
            type="file"
            onChange={handleFileChange} />

         <input
            className="block my-3 text-black"
            type="text"
            placeholder="Digite uma legenda"
            value={legendField}
            onChange={e => setLegendField(e.target.value)} />

         <button
            className="block my-3"
            onClick={handleSubmit}>
            Enviar
         </button>
      </div>
   )
}