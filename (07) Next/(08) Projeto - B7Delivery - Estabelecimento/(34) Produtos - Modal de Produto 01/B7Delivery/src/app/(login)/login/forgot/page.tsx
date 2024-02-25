'use client'

import { api } from "@/libs/api"
import { Box, Button, TextField, Typography, Alert } from "@mui/material"

import { FormEvent, useState } from "react"

const Page = () => {
   const [emailField, setEmailField] = useState('')
   const [error, setError] = useState('')
   const [info, setInfo] = useState('')
   const [loading, setLoading] = useState(false)

   const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
      event.preventDefault() // Previne o reload da pagina

      if(!emailField) {
         setError('Preencha seu email.')

         return
      }

      setError('')

      setInfo('')
      
      setLoading(true)

      const result = await api.forgot(emailField)

      setLoading(false)

      if(result.error) {
         setError(result.error)
      } else {
         setInfo('Enviamos um email para recuperação da sua senha.')
      }
   }

   return(
      <>
         <Typography component='p' sx={{
            textAlign: 'center', mt: 2, color: '#555'
         }}>
            Deseja recuperar sua senha.
         </Typography>

         <Box component='form' sx={{ mt: 3 }} onSubmit={ handleSubmit }>
            <TextField 
               label='Digite seu email' 
               name='email'
               // required
               fullWidth
               autoFocus
               sx={{ mb: 2 }}
               value={ emailField }
               onChange={ e => setEmailField(e.target.value) }
               disabled={ loading }
            />

            <Button
               type='submit'
               variant='contained'
               fullWidth
               disabled={ loading }>
               { loading ? 'Carregando ...' : 'Recuperar a senha' }
            </Button>

            { error &&
               <Alert
                  variant="filled"
                  severity="error"
                  sx={{ mt: 3 }}>
                  { error }
               </Alert>
            }

            { info &&
               <Alert
                  variant="filled"
                  severity="success"
                  sx={{ mt: 3 }}>
                  { info }
               </Alert>
            }
         </Box>
      </>
   )
}

export default Page