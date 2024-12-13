'use client'

import axios from "axios"
import { ChangeEvent, useState } from "react"

export const Form = () => {
   const [selectedFile, setSelectedFile] = useState<File>()
   const [legendField, setLegendField] = useState('')
   const [progressUpload, setProgressUpload] = useState(0)

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

         const request = await fetch('https://b7web.com.br/uploadtest/', {
            method: 'POST',
            body: formData,
         })
         const json = await request.json()

         const url = 'https://b7web.com.br/uploadtest/'
         const req = await axios.post(url, formData, {
            onUploadProgress: (progressEvent) => {
               if (progressEvent.total) {
                  const pct = Math.floor((progressEvent.loaded / progressEvent.total) * 100)
                  setProgressUpload(pct)
               }
            },
         })

         console.log(req.data)
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

         <div className="w-[500px] h-5 bg-green-200">
            <div className="w-[500px] h-5 bg-green-800" style={{ width: `${progressUpload}%` }}></div>
         </div>

         <div>
            {progressUpload}%
         </div>
      </div>
   )
}