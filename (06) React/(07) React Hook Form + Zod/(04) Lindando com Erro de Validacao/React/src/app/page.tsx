'use client'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  name: string
  lastName: string
  age: number
}

export default function Page() {
  const { 
    handleSubmit, 
    register,
    formState: { errors }
  } = useForm<Inputs>()

  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <div className="container mx-auto">
      <form onSubmit={ handleSubmit(handleFormSubmit) }>
        <input 
          { ...register('name', { required: true, minLength: 2, maxLength: 20 }) }
          placeholder='Digite seu nome'
          className='border border-white text-black p-3' />
        {/* { errors.name && <p>Esse item precisa ser preenchido corretamente</p> } */}
        { errors.name?.type === 'required' && <p>Campo obrigatorio</p> }
        { errors.name?.type === 'minLength' && <p>Campo precisa ter 2 ou mais caracteres</p> }

        <input 
          { ...register('lastName', { pattern: /^[a-z]/i }) }
          placeholder='Digite seu sobrenome'
          className='block mt-4 border border-white text-black p-3' />

        <input 
          type='number'
          { ...register('age', { required: 'Campo idade obrigatório', min: 18, max: 120 }) }
          placeholder='Digite sua idade'
          className='block mt-4 border border-white text-black p-3' />
          {/* { errors.age && <p>Idade precisa ser entre 18 e 120 anos.</p> } */}
          { errors.age && <p>{ errors.age.message }</p> }
        
        <input type="submit" value='Enviar' />
      </form>
    </div>
  )
}
