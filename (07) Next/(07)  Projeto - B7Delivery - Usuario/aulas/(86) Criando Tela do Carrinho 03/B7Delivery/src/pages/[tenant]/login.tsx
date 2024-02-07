import styles from '../../styles/Login.module.css'
import '../../app/globals.css'
import { useAuthContext } from '@/contexts/auth'
import { Tenant } from '@/types/Tenant'
import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import { useApi } from '@/libs/useApi'
import Head from 'next/head'
import { Header } from '@/components/Header'
import { InputField } from '@/components/InputField'
import { Button } from '@/components/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAppContext } from '@/contexts/app'

const Login = (data: Props) => {
   const { tenant, setTenant } = useAppContext()
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   useEffect(() => {
      // console.log(data.tenant)
      setTenant(data.tenant)
   }, [])

   const { setUser, setToken } = useAuthContext()
   const router = useRouter()

   const handleSubmit = () => {
      setToken('1234')

      setUser({
         name: 'Nick',
         email: 'email@email.com'
      })

      router.push(`/${ data.tenant.slug }`)
   }

   const handleSignUp = () => {
      router.push(`/${ data.tenant.slug }/signup`)
   }

   return(
      <div className={ styles.container }>
         <Head>
            <title>Login | { data.tenant.name } </title>
         </Head>

         <Header 
            backHref={ `/${ data.tenant.slug }` }
            color={ data.tenant.mainColor }
         />

         <div className={ styles.header }>
            { data.tenant.name }
         </div>

         <div 
            className={ styles.subtitle }
            style={{ borderBottomColor: data.tenant.mainColor }}>
            Use suas credenciais para realizar o Login.
         </div>

         <div className={ styles.line }></div>

         <div className={ styles.formArea }>
            <div className={ styles.inputArea }>
               <InputField
                  color={ data.tenant.mainColor }
                  placeholder='Digite seu email'
                  value={ email }
                  onChange={ setEmail }
               />
            </div>

            <div className={ styles.inputArea }>
               <InputField
                  color={ data.tenant.mainColor }
                  placeholder='Digite sua senha'
                  value={ password }
                  onChange={ setPassword }
                  password
               />

            </div>

            <div className={ styles.inputArea }>
               <Button 
                  color={ data.tenant.mainColor }
                  label='Entar'
                  onClick={ handleSubmit }
                  fill
               />
            </div>
         </div>

         <div 
            className={ styles.forgetArea }
            style={{ borderBottomColor: data.tenant.mainColor }}>
            Esqueceu sua senha? <Link href={ `/${ data.tenant.slug }/forget` }>
               <span style={{ color: data.tenant.mainColor }}>Clique aqui</span>
               </Link>
         </div>

         <div className={ styles.line }></div>

         <div className={ styles.signUpArea }>
            <Button 
               color={ data.tenant.mainColor }
               label='Quero me Cadastrar'
               onClick={ handleSignUp }
            />
         </div>

      </div>
   )
}

export default Login

type Props = {
   tenant: Tenant
}

export const getServerSideProps: GetServerSideProps = async(context) => {
   const { tenant: tenantSlug } = context.query
   // console.log('Tenant: ', tenantSlug)

   const api = useApi(tenantSlug as string)

   // Get Tenant
   const tenant = await api.getTenant()

   if(!tenant) {
      // Verifica o Tenant e libera a aplicação caso ele for um Tenant esperado pela API
      return {
         redirect: {
            destination: '/',
            permanent: false
         }
      }
   }

   return{
      props: {
         tenant
      }
   }
}