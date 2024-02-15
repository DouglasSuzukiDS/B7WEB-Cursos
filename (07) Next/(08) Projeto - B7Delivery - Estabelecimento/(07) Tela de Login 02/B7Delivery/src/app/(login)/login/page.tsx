'use client'

import { Box, Button, TextField, Typography, Link as MuiLink, Alert } from "@mui/material"
import Link from "next/link"
import { FormEvent, useState } from "react"

const Page = () => {
   const [emailField, setEmailField] = useState('')
   const [passwordField, setPasswordField] = useState('')
   const [error, setError] = useState('')
   const [loading, setLoading] = useState(false)

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault() // Previne o reload da pagina

      if(!emailField || !passwordField) {
         setError('Preencha o campo email/senha.')

         return
      }

      setError('')
      setLoading(true)


   }

   return(
      <>
         <Typography component='p' sx={{
            textAlign: 'center', mt: 2, color: '#555'
         }}>
            Digite seus dados para entrar no painel administrativo do estabelicimento e ferenciar Produtos/Pedidos.
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

            <TextField 
               label='Digite sua senha' 
               name='password'
               type='password'
               // required
               fullWidth
               sx={{ mb: 2 }}
               value={ passwordField }
               onChange={ e => setPasswordField(e.target.value) }
               disabled={ loading }
            />

            <Button
               type='submit'
               variant='contained'
               fullWidth
               disabled={ loading }>
               { loading ? 'Carregando ...' : 'Entrar' }
            </Button>

            { error &&
               <Alert
                  variant="filled"
                  severity="error"
                  sx={{ mt: 3 }}>
                  { error }
               </Alert>
            }

            <Box sx={{ mt: 3 }}>
               <MuiLink 
                  href='/login/forgot'
                  variant='body2'
                  component={ Link }>
                  Esqueceu sua senha
               </MuiLink>
            </Box>
         </Box>
      </>
   )
}

export default Page