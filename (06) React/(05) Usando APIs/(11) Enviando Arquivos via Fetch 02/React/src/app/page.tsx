'use client'

import { User } from "@/types/User"
import { useEffect, useRef, useState } from "react"

const Page = () => {
  const [legendInput, setLegendInput] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSend = async() => {
    // console.log(fileInputRef.current?.files) // Informa o arquivo dentro do input file

    if(fileInputRef.current?.files && fileInputRef.current.files.length > 0) {
      const fileItem = fileInputRef.current.files[0]

      //console.log(fileItem) // Aqui contem as informações do arquivo

      // Tipes de minetype: image/jpg, image/jpeg, image/png, image/gif

      const allowed = ['image/jpg', 'image/jpeg', 'image/png']

      if(allowed.includes(fileItem.type)){
        const data = new FormData()
        data.append('image', fileItem)
        data.append('legend', legendInput)

        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-type': 'multipart/form-data'
          },
          body: data
        })

        const json = res.json()
        console.log(json)
      } else {
        alert('Arquivo incompatível')
      }
      
    } else {
      alert('Selecione um arquivo')
    }
  }
  
  return(
    <div className="container mx-auto">
      <h1 className="text-3xl mt-4">Upload de Imagem</h1>

      <div className="max-w-md flex flex-col gap-3 border border-dotted border-white p-3 m-4">
        <input 
          type="file" 
          ref={ fileInputRef } />

        <input 
          type="text" 
          placeholder="Digite uma legenda" 
          className="p-3 bg-white rounded-md text-black" 
          value={ legendInput } 
          onChange={ e => setLegendInput(e.target.value) } />

        <button onClick={ handleFileSend }>Enviar Imagem</button>
      </div>
    </div>
  )
}

export default Page