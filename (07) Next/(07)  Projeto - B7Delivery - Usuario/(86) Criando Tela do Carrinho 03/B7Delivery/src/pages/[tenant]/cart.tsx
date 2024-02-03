import styles from '../../styles/Cart.module.css'
import '../../app/globals.css'
import { useApi } from '@/libs/useApi'
import { GetServerSideProps } from 'next'
import { useAppContext } from '@/contexts/app'
import { Tenant } from '@/types/Tenant'
import { useEffect, useState } from 'react'
import { Product } from '@/types/Product'
import { getCookie } from 'cookies-next'
import { User } from '@/types/User'
import { useAuthContext } from '@/contexts/auth'
import Head from 'next/head'
import { Header } from '@/components/Header'
import { InputField } from '@/components/InputField'
import { Button } from '@/components/Button'
import { useFormatter } from '@/libs/useFormatter'

const Cart = (data: Props) => {
   const { setToken, setUser } = useAuthContext()
   const { tenant, setTenant } = useAppContext()

   useEffect(() => {
      // console.log(data.tenant)
      setTenant(data.tenant)
      setToken(data.token)

      if(data.user) setUser(data.user)
   }, [])

   const formatter = useFormatter()

   const [shippingInput, setShippingInput] = useState('')
   const [shippingPrice, setShippingPrice] = useState(0)
   const [subTotal, setSubTotal] = useState(0)

   const handleShippingCalc = () => {

   }

   const handleFinish = () => {

   }

   return(
      <div className={ styles.container }>
         <Head>
            <title>Sacola | { data.tenant.name }</title>
         </Head>

         <Header 
            backHref={ `/${ data.tenant.name }` }
            color={ data.tenant.mainColor }
            title='Sacola'
         />

         <div className={ styles.productsQuantity }>
            X itens
         </div>

         <div className={ styles.productsList}>

         </div>

         <div className={ styles.shippingArea}>
            <div className={ styles.shippingTitle}>
               Calcular frete e prazo
            </div>

            <div className={ styles.shippingForm}>
               <InputField 
                  color={ data.tenant.mainColor }
                  placeholder='Digite seu frete'
                  value={ shippingInput }
                  onChange={  newValue => setShippingInput(newValue) }
               />

               <Button 
                  color={ data.tenant.mainColor }
                  label='Ok'
                  onClick={ handleShippingCalc }
               />
            </div>

            <div className={ styles.shippingInfo}>
               <div className={ styles.shippingAddress}>
                  Rua blabla
               </div>

               <div className={ styles.shippingTime}>
                  <div className={ styles.shippingTimeText}>
                     Receba em até 20 minutos
                  </div>

                  <div 
                     className={ styles.shippingTimePrice}
                     style={{ color: data.tenant.mainColor }}>
                     { formatter.formatPrice(shippingPrice) }
                  </div>
               </div>

            </div>

         </div>

         <div className={ styles.resumeArea}>
            <div className={ styles.resumeItem}>

               <div className={ styles.resumeLeft}>
                  Subtotal
               </div>

               <div className={ styles.resumeRight}>
                  { formatter.formatPrice(subTotal) }
               </div>
            </div>

            <div className={ styles.resumeItem}>
               <div className={ styles.resumeLeft}>
                  Frete
               </div>

               <div className={ styles.resumeRight}>
                  { shippingPrice > 0 ? formatter.formatPrice(subTotal) : '--' }
               </div>
            </div>

            <div className={ styles.resumeLine}></div>

            <div className={ styles.resumeItem}>
               <div className={ styles.resumeLeft}>
                  Total
               </div>

               <div 
                  className={ styles.resumeRightBig}
                  style={{ color: data.tenant.mainColor }}>
                  { formatter.formatPrice(shippingPrice + subTotal ) }
               </div>
            </div>

            <div className={ styles.resumeButton}>
               <Button 
                  color={ data.tenant.mainColor }
                  label='Continuar'
                  onClick={ handleFinish }
                  fill
               />
            </div>

         </div>

      </div>
   )
}

export default Cart

type Props = {
   tenant: Tenant
   products: Product[]
   token: string
   user: User | null
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

   if(!token) token = ''

   // Get Products
   const products = await api.getAllProduct()

   return{
      props: {
         tenant,
         products,
         user,
         token
      }
   }
}