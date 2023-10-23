'use client'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  name: string
  lastName: string
}

export default function Page() {
  const { handleSubmit, register } = useForm<Inputs>()

  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <div className="container mx-auto">
      <form onSubmit={ handleSubmit(handleFormSubmit) }>
        <input 
          { ...register('name') }
          placeholder='Digite seu nome'
          className='border border-white text-black p-3' />

        <input 
          { ...register('lastName') }
          placeholder='Digite seu sobrenome'
          className='block mt-4 border border-white text-black p-3' />
        
        <input type="submit" value='Enviar' />
      </form>
    </div>
  )
}
