import styles from '@/styles/NewAddresses.module.css'
import '@/app/globals.css'
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
import { InputField } from '@/components/InputField'
import { verify } from 'crypto'

const NewAddress = (data: Props) => {
   const { setToken, setUser } = useAuthContext()
   const { tenant, setTenant, setShippingAddress, setShippingPrice } = useAppContext()

   useEffect(() => {
      // console.log(data.tenant)
      setTenant(data.tenant)
      setToken(data.token)

      if(data.user) setUser(data.user)
   }, [])

   const formatter = useFormatter()
   const router = useRouter()
   const api = useApi(data.tenant.slug)

   const [errorFields, setErrorFields] = useState<string[]>([])

   const [addressCep, setAddressCep] = useState('')
   const [addressStreet, setAddressStreet] = useState('')
   const [addressNumber, setAddressNumber] = useState('')
   const [addressNeighborhood, setAddressNeighborhood] = useState('')
   const [addressCity, setAddressCity] = useState('')
   const [addressState, setAddressState] = useState('')
   const [addressComplement, setAddressComplement] = useState('')

   const verifyAddress = () => {
      let approved = true
      let newErrorFields = []

      if(addressCep.replaceAll(/[^0-9]/g, '').length !== 8) {
         newErrorFields.push('cep')
         approved = false
      }

      if(addressStreet.length <= 2) {
         newErrorFields.push('street')
         approved = false
      }

      if(addressNeighborhood.length <= 2) {
         newErrorFields.push('neighborhood')
         approved = false
      }

      if(addressCity.length <= 2) {
         newErrorFields.push('city')
         approved = false
      }

      if(addressState.length !== 2) {
         newErrorFields.push('state')
         approved = false
      }

      setErrorFields(newErrorFields)

      return approved
   }
   
   const handleNewAddress = async() => {
      if(verifyAddress()) {
         let address: Address = {
            id: 0,
            cep: addressCep,
            street: addressStreet,
            number: addressNumber,
            neighborhood: addressNeighborhood,
            city: addressCity,
            state: addressState,
            complement: addressComplement
         }

         let newAddress = await api.adduserAddress(address)

         if(newAddress.id > 0) {
            router.push(`/${ data.tenant.slug }/myaddresses`)
         } else {
            alert('Ocorreu um erro! Tente mais tarde.')
         }
      }
   }

   return(
      <div className={ styles.container }>
         <Head>
            <title>Novo Endereço | { data.tenant.name }</title>
         </Head>

         <Header 
            backHref={ `/${ data.tenant.slug }/myaddresses` }
            color={ data.tenant.mainColor }
            title='Novo Endereço'
         />

         <div className={ styles.inputs}>

            <div className={ styles.row}>

               <div className={ styles.column}>
                  <div className={ styles.label}>
                     CEP
                  </div>

                  <InputField 
                     color={ data.tenant.mainColor }
                     placeholder='Digite um cep'
                     value={ addressCep }
                     onChange={ newValue => setAddressCep(newValue) }
                     warning = { errorFields.includes('cep') }
                  />
            
               </div>

            </div>

            <div className={ styles.row}>

               <div className={ styles.column}>
                  <div className={ styles.label}>
                     Rua
                  </div>

                  <InputField 
                     color={ data.tenant.mainColor }
                     placeholder='Digite uma rua'
                     value={ addressStreet }
                     onChange={ newValue => setAddressStreet(newValue) }
                     warning = { errorFields.includes('street') }
                  />
            
               </div>

               <div className={ styles.column}>
                  <div className={ styles.label}>
                     Número
                  </div>

                  <InputField 
                     color={ data.tenant.mainColor }
                     placeholder='Digite um número'
                     value={ addressNumber }
                     onChange={ newValue => setAddressNumber(newValue) }
                     warning = { errorFields.includes('number') }
                  />
            
               </div>

            </div>

            <div className={ styles.row}>

               <div className={ styles.column}>
                  <div className={ styles.label}>
                     Bairro
                  </div>

                  <InputField 
                     color={ data.tenant.mainColor }
                     placeholder='Digite um bairro'
                     value={ addressNeighborhood }
                     onChange={ newValue => setAddressNeighborhood(newValue) }
                     warning = { errorFields.includes('neighborhood') }
                  />
            
               </div>

            </div>

            <div className={ styles.row}>

               <div className={ styles.column}>
                  <div className={ styles.label}>
                     Cidade
                  </div>

                  <InputField 
                     color={ data.tenant.mainColor }
                     placeholder='Digite uma cidade'
                     value={ addressCity }
                     onChange={ newValue => setAddressCity(newValue) }
                     warning = { errorFields.includes('city') }
                  />
            
               </div>

            </div>

            <div className={ styles.row}>

               <div className={ styles.column}>
                  <div className={ styles.label}>
                     Estado
                  </div>

                  <InputField 
                     color={ data.tenant.mainColor }
                     placeholder='Digite um estado'
                     value={ addressState }
                     onChange={ newValue => setAddressState(newValue) }
                     warning = { errorFields.includes('state') }
                  />
            
               </div>

            </div>

            <div className={ styles.row}>

               <div className={ styles.column}>
                  <div className={ styles.label}>
                     Complemento
                  </div>

                  <InputField 
                     color={ data.tenant.mainColor }
                     placeholder='Digite um complemento'
                     value={ addressComplement }
                     onChange={ newValue => setAddressComplement(newValue) }
                  />
            
               </div>

            </div>

         </div>

         <div className={ styles.btnArea}>
            <Button 
               color={ data.tenant.mainColor }
               label='Adicionar'
               onClick={ handleNewAddress }
               fill
            />
         </div>

      </div>
   )
}

export default NewAddress

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
            destination: `/${ tenant.slug }/login`, 
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