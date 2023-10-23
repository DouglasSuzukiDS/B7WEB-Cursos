'use client'

import { SignUpForm } from '@/types/SignUpForm'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '@mui/material'

export default function Page() {
  const { 
    control,
    handleSubmit,
  } = useForm<SignUpForm>()

  const handleFormSubmit: SubmitHandler<SignUpForm> = (data) => {
    console.log(data)
  }

  return (
    <div className="container mx-auto">
      <form onSubmit={ handleSubmit(handleFormSubmit) }>

        <Controller
          control={ control }
          name='name'
          rules={{ required: true, minLength: 2, maxLength: 20 }}
          render={ ({ field, fieldState }) => 
            <Input 
              { ...field } 
              error={ fieldState.invalid }
              style={{ backgroundColor: '#FFF' }}
            /> 
          }
        />

        <Controller
          control={ control }
          name='lastName'
          render={ ({ field }) => 
            <Input 
              { ...field } 
              style={{ backgroundColor: '#FFF' }}
          /> }
        />

        <Controller
          control={ control }
          name='age'
          rules={{ required: true, min: 18 }}
          render={ ({ field, fieldState }) =>
            <Input 
              { ...field } 
              error={ fieldState.invalid }
              style={{ backgroundColor: '#FFF' }}
            /> 
          }
        />
        
        <input type="submit" value='Enviar' />
      </form>
    </div>
  )
}
