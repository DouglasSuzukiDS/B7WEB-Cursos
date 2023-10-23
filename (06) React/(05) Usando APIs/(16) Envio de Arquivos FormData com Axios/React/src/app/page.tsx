'use client'

import { api } from "@/utils/api"
import { format } from "path"
import { useRef } from "react"

const Page = () => {
  const fileInput = useRef<HTMLInputElement>(null)

  const handleSendFile = async() => {
    if(fileInput.current?.files && fileInput.current.files.length > 0) {
      const file = fileInput.current.files[0]

      const data = new FormData()
      data.append('name', 'Shanks')
      data.append('file', file)

      const response = api.post('/posts', data)
    }
  }
  
  return(
    <div className="container mx-auto">
      <input type="file" ref={ fileInput } />

      <button onClick={ handleSendFile }>Enviar</button>
    </div>
  )
}

export default Page