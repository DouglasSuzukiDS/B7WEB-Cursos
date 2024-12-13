'use client'

import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"

export const Form = () => {
   const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
      maxFiles: 3,
      accept: {
         // 'image/jpeg': ['.jpg']
      }
   })

   const [selectedFile, setSelectedFile] = useState<File>()
   const [legendField, setLegendField] = useState('')

   const [progressUpload, setProgressUpload] = useState(0)
   const [photoString, setPhotoString] = useState('')

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

   const handleDropzoneSubmit = async () => {
      // console.log(acceptedFiles[0].type) => Mime-Type
      // console.log(acceptedFiles[0].size) => Tamanho

      // setPhotoString(URL.createObjectURL(acceptedFiles[0]))

      const formData = new FormData()
      // formData.append('file', acceptedFiles[0])

      // Assim é possível enviar diversos arquivos
         // A API não foi feita para receber mais d eum arquivo por isso aqui vai dar erro
      for (let i in acceptedFiles) {
         formData.append(`file[${i}]`, acceptedFiles[i])
      }

      formData.append('legend', legendField)

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

   useEffect(() => {
      // console.log(acceptedFiles)
      if (acceptedFiles.length > 0) {
         handleDropzoneSubmit()
      }
   }, [acceptedFiles])

   return (
      <div className="">
         <div className="bg-gray-400 size-80 p-5" {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Arrate o arquivo aqui para fazer o upload</p>
         </div>

         {/* <div>Arquivos: {acceptedFiles.length}</div> */}

         {/* 
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
         */}


         <div className="w-80 h-5 bg-green-200">
            <div className="h-5 bg-green-800" style={{ width: `${progressUpload}%` }}></div>
         </div>

         <div>
            {progressUpload}%
         </div>

         {photoString &&
            <img src={photoString} className="max-w-80" />}


      </div>
   )
}