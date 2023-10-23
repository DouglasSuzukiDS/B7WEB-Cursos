'use client'

import { Form, useForm } from "react-hook-form"

export default function Page() {
  const { register, control } = useForm()

  const handleSuccess = () => {
    alert('Success')
  }

  const handleError = () => {
    alert('Error')
  }

  return (
    <div className="container mx-auto">

      <Form 
        control={ control }
        action={ 'https://jsonplaceholder.typicode.com/posts' }
        onSuccess={ handleSuccess }
        onError={ handleError }
      >
        <input { ...register('title', { required: true }) } className="border border-white p-3 text-black mr-3" />

        <input { ...register('body', { required: true }) } className="border border-white p-3 text-black mr-3" />

        <input { ...register('userId', { required: true }) } className="border border-white p-3 text-black" />
        
        <button>Enviar</button>
      </Form>

    </div>
  )
}
