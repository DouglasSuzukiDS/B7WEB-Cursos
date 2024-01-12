import styles from '../../styles/ForgetSuccess.module.css'
import '../../app/globals.css'
import {  useAppContext } from '@/contexts/AppContext'
import { Tenant } from '@/types/Tenant'
import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import { useApi } from '@/libs/useApi'
import Head from 'next/head'
import { Header } from '@/components/Header'
import { InputField } from '@/components/InputField'
import { Button } from '@/components/Button'
import { useRouter } from 'next/router'
import { Icon } from '@/components/Icon'

const ForgetSuccess = (data: Props) => {
   const { tenant, setTenant } = useAppContext()
   const [email, setEmail] = useState('')

   useEffect(() => {
      // console.log(data.tenant)
      setTenant(data.tenant)
   }, [])

   const router = useRouter()

   const handleSubmit = () => {
      router.push(`/${ data.tenant.slug }/login`)
   }

   return(
      <div className={ styles.container }>
         <Head>
            <title>Esqueci a senha | { data.tenant.name } </title>
         </Head>

         <Header 
            backHref={ `/${ data.tenant.slug }/forget` }
            color={ data.tenant.mainColor }
         />

         <div className={ styles.iconArea }>
            <Icon 
               icon='mailSend'
               color={ data.tenant.mainColor }
               width={ 100 }
               height={ 100 }
            />
         </div>


         <div className={ styles.title }>
            Verifique seu email.
         </div>

         <div 
            className={ styles.subtitle }>
           Enviamos as instruções para recuperação de senha para o seu email.
         </div>

         <div className={ styles.formArea }>
            <div className={ styles.inputArea }>
               <Button 
                  color={ data.tenant.mainColor }
                  label='Fazer login'
                  onClick={ handleSubmit }
                  fill
               />
            </div>
         </div>

      </div>
   )
}

export default ForgetSuccess
type Props = {
   tenant: Tenant
}

export const getServerSideProps: GetServerSideProps = async(context) => {
   const { tenant: tenantSlug } = context.query
   // console.log('Tenant: ', tenantSlug)

   const api = useApi()

   // Get Tenant
   const tenant = await api.getTenant(tenantSlug as string)

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