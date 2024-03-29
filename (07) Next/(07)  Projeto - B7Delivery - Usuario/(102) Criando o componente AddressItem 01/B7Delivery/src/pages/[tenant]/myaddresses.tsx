import styles from '@/styles/MyAddresses.module.css'
import '../../app/globals.css'
import { useApi } from '@/libs/useApi'
import { GetServerSideProps } from 'next'
import { useAppContext } from '@/contexts/app'
import { Tenant } from '@/types/Tenant'
import { useEffect, useState } from 'react'
import { Product } from '@/types/Product'
import { getCookie, setCookie } from 'cookies-next'
import { User } from '@/types/User'
import { useAuthContext } from '@/contexts/auth'
import Head from 'next/head'
import { Header } from '@/components/Header'
import { useFormatter } from '@/libs/useFormatter'
import { CartItem } from '@/types/CartItem'
import { useRouter } from 'next/router'
import { Button } from '@/components/Button'
import { Address } from '@/types/Address'
import { AddressItem } from '@/components/AddressItem'

const MyAddresses = (data: Props) => {
   const { setToken, setUser } = useAuthContext()
   const { tenant, setTenant } = useAppContext()

   useEffect(() => {
      // console.log(data.tenant)
      setTenant(data.tenant)
      setToken(data.token)

      if(data.user) setUser(data.user)
   }, [])

   const formatter = useFormatter()
   const router = useRouter()

   const handleNewAddress = () => {
      router.push(`/${ data.tenant.slug }/newaddress`)
   }

   const handleAddressSelect = (address: Address) => {

   }

   const handleAddressEdit = (id: number) => {
      
   }

   const handleAddressDelete = (id: number) => {
      
   }

   return(
      <div className={ styles.container }>
         <Head>
            <title>Meus Endereços | { data.tenant.name }</title>
         </Head>

         <Header 
            backHref={ `/${ data.tenant.slug }/checkout` }
            color={ data.tenant.mainColor }
            title='Meus Endereços'
         />

         <div className={ styles.list }>
            { data.addresses.map((item, index) => (
               <AddressItem 
                  color={ data.tenant.mainColor }
                  address={ item }
                  onSelect={ handleAddressSelect }
                  onEdit={ handleAddressEdit }
                  onDelete={ handleAddressDelete }
               />
            )) }
         </div>

         <div className={ styles.btnArea}>
            <Button 
               color={ data.tenant.mainColor }
               label='Novo Endereço'
               onClick={ handleNewAddress }
               fill
            />
         </div>

      </div>
   )
}

export default MyAddresses

type Props = {
   tenant: Tenant
   products: Product[]
   token: string
   user: User | null
   addresses: Address[]
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

   // Get Logged User
   // const token = context.req.cookies.token
   let token = getCookie('token', context)
   const user = await api.authorizeToken(token as string)

   if(!user) {
      return { 
         redirect: { 
            destination: '/login', 
            permanent: false 
         } 
      }
   }

   if(!token) token = ''

   // GetAddresses from Logged User
   const addresses = await api.getUserAddresses(user.email)

   return{
      props: {
         tenant,
         user,
         token,
         addresses
      }
   }
}