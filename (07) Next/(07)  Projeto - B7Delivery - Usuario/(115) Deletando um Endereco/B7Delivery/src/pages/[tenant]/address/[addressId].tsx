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

const EditAddress = (data: Props) => {
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

   const [address, setAddress] = useState<Address>(data.address)

   console.log(JSON.stringify(data.address))

   const changeAddressField = (field: keyof Address, value: typeof address[keyof Address]) => {
      // field: O field precisa ser uma das propriedades de Address
      // value: O value precisa ser do tipo da própria chave de Address já que o state address já tem o tipo de Address
      setAddress({ ...address, [field]: value })
   }

   const verifyAddress = () => {
      let approved = true
      let newErrorFields = []

      if(address.cep.replaceAll(/[^0-9]/g, '').length !== 8) {
         newErrorFields.push('cep')
         approved = false
      }

      if(address.street.length <= 2) {
         newErrorFields.push('street')
         approved = false
      }

      if(address.neighborhood.length <= 2) {
         newErrorFields.push('neighborhood')
         approved = false
      }

      if(address.city.length <= 2) {
         newErrorFields.push('city')
         approved = false
      }

      if(address.state.length !== 2) {
         newErrorFields.push('state')
         approved = false
      }

      setErrorFields(newErrorFields)

      return approved
   }
   
   const handleSaveAddress = async() => {
      if(verifyAddress()) {
         await api.editUserAddress(address)

         router.push(`/${ data.tenant.slug }/myaddresses`)
      }
   }

   return(
      <div className={ styles.container }>
         <Head>
            <title>Editar Endereço | { data.tenant.name }</title>
         </Head>

         <Header 
            backHref={ `/${ data.tenant.slug }/myaddresses` }
            color={ data.tenant.mainColor }
            title='Editar Endereço'
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
                     value={ address.cep }
                     onChange={ value => changeAddressField('cep', value) }
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
                     value={ address.street }
                     onChange={ value => changeAddressField('street', value) }
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
                     value={ address.number }
                     onChange={ value => changeAddressField('number', value) }
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
                     value={ address.neighborhood }
                     onChange={ value => changeAddressField('neighborhood', value) }
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
                     value={ address.city }
                     onChange={ value => changeAddressField('city', value) }
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
                     value={ address.state }
                     onChange={ value => changeAddressField('state', value) }
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
                     value={ address.complement ?? '' }
                     onChange={ value => changeAddressField('complement', value) }
                  />
            
               </div>

            </div>

         </div>

         <div className={ styles.btnArea}>
            <Button 
               color={ data.tenant.mainColor }
               label='Atualizar'
               onClick={ handleSaveAddress }
               fill
            />
         </div>

      </div>
   )
}

export default EditAddress

type Props = {
   tenant: Tenant
   products: Product[]
   token: string
   user: User | null
   address: Address
}

export const getServerSideProps: GetServerSideProps = async(context) => {
   const { tenant: tenantSlug, addressId } = context.query
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

   // Get Address
   const address = await api.getUserAddress(parseInt(addressId as string))

   if(!address) {
      return { 
         redirect: { 
            destination: `/${ tenant.slug }/myaddresses`, 
            permanent: false 
         } 
      }
   }

   return{
      props: {
         tenant,
         user,
         token,
         address
      }
   }
}