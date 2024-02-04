import styles from '../../styles/SignUp.module.css'
import '../../app/globals.css'
import { useAppContext } from '@/contexts/app'
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

const SignUp = (data: Props) => {
   const { tenant, setTenant } = useAppContext()

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   useEffect(() => {
      // console.log(data.tenant)
      setTenant(data.tenant)
   }, [])

   const router = useRouter()

   const handleSubmit = () => {

   }

   const handleSignUp = () => {
      router.push(`/${ data.tenant.slug }/signup`)
   }

   return(
      <div className={ styles.container }>
         <Head>
            <title>Cadastro | { data.tenant.name } </title>
         </Head>

         <Header 
            backHref={ `/${ data.tenant.slug }/login` }
            color={ data.tenant.mainColor }
         />

         <div className={ styles.header }>
            { data.tenant.name }
         </div>

         <div 
            className={ styles.subtitle }
            style={{ borderBottomColor: data.tenant.mainColor }}>
            Preencha os campos para criar o seu cadastro.
         </div>

         <div className={ styles.line }></div>

         <div className={ styles.formArea }>
            <div className={ styles.inputArea }>
               <InputField
                  color={ data.tenant.mainColor }
                  placeholder='Digite seu nome'
                  value={ name }
                  onChange={ setName }
               />
            </div>

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
                  label='Cadastrar'
                  onClick={ handleSubmit }
                  fill
               />
            </div>
         </div>

         <div 
            className={ styles.forgetArea }>
            Já tem cadastro? <Link href={ `/${ data.tenant.slug }/login` }>
               <span style={{ color: data.tenant.mainColor }}>Fazer Login</span>
               </Link>
         </div>
      </div>
   )
}

export default SignUp

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