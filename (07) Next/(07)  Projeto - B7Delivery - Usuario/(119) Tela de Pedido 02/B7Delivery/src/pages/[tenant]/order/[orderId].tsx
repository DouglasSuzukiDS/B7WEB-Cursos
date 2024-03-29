import styles from '@/styles/orderId.module.css'
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
import { InputField } from '@/components/InputField'
import { Button } from '@/components/Button'
import { useFormatter } from '@/libs/useFormatter'
import { CartItem } from '@/types/CartItem'
import { useRouter } from 'next/router'
import { CartProductItem } from '@/components/CartProductItem'
import { CartCookie } from '@/types/CartCookie'
import { ButtonWithIcon } from '@/components/ButtonWithIcon'
import { Address } from '@/types/Address'
import { Order } from '@/types/Order'
import { Darumadrop_One } from 'next/font/google'

const OrderId = (data: Props) => {
   const { setToken, setUser } = useAuthContext()
   const { tenant, setTenant, shippingAddress, shippingPrice } = useAppContext()

   useEffect(() => {
      // console.log(data.tenant)
      setTenant(data.tenant)
      setToken(data.token)

      if(data.user) setUser(data.user)
   }, [])

   const formatter = useFormatter()
   const router = useRouter()
   const api = useApi(data.tenant.slug)

   const orderStatusList = {
      preparing: {
         label: 'Preparando',
         longLavel: 'Preparando seu pedido ...',
         backgroundColor: '#FEFAE6',
         fontColor: '#D4BC34',
         pct: 25
      },

      sent: {
         label: 'Enviado',
         longLavel: 'Já enviados o seu pedido!',
         backgroundColor: '#F1F3F8',
         fontColor: '#758CBD',
         pct: 75
      },

      delivered: {
         label: 'Entregue',
         longLavel: 'Seu pedido foi entregue',
         backgroundColor: '#F1F8F6',
         fontColor: '#6AB70A',
         pct: 75
      }
   }

   return(
      <div className={ styles.container }>
         <Head>
            <title>Pedidos { data.order.id } | { data.tenant.name }</title>
         </Head>

         <Header 
            backHref={ `/${ data.tenant.slug }` }
            color={ data.tenant.mainColor }
            title={ `Pedido #${ data.order.id }` }
         />

         <div className={ styles.orderInfoArea }>
            <div className={ styles.orderInfoStatus }>
               { orderStatusList[data.order.status].label }
            </div>

            <div className={ styles.orderInfoQt }>
               { data.order.products.length } { data.order.products.length === 1 ? 'item' : 'itens' }
            </div>


            <div className={ styles.orderInfoDate }>
               { formatter.formatDate(data.order.orderDate) }
            </div>

         </div>

         <div className={ styles.productsList}>
            { data.order.products.map((cartItem, index) => (
               <CartProductItem
                  key={ index }
                  color={ data.tenant.mainColor }
                  quantity={ cartItem.qt }
                  product={ cartItem.product }
                  onChange={ () => {} }
                  noEdit
               />
            ))}
         </div>

         <div className={ styles.infoGroup }>

            <div className={ styles.infoArea }>
               <div className={ styles.infoTitle}>
                  Endereço
               </div>

               <div className={ styles.infoBody}>
                  <ButtonWithIcon
                     color={ data.tenant.mainColor }
                     leftIcon={ 'location' }
                     rightIcon={ 'rightArrow' } 
                     value={ `${ data.order.shippingAddress.street } ${ data.order.shippingAddress.number } - ${ data.order.shippingAddress.city }` }
                     onClick={ () => {} }
                  />
               </div>
            </div>

            <div className={ styles.infoArea }>
               <div className={ styles.infoTitle}>
                  Tipo de pagamento
               </div>

               <div className={ styles.infoBody}>
                  <div className={ styles.paymentTypes}>
                     <div className={ styles.paymentBtn}>
                        <ButtonWithIcon
                           color={ data.tenant.mainColor } 
                           leftIcon='money'
                           value='Dinheiro'
                           onClick={ () => {} }
                           fill={ data.order.paymentType === 'money'}
                        />
                     </div>

                     <div className={ styles.paymentBtn}>
                           <ButtonWithIcon
                              color={ data.tenant.mainColor } 
                              leftIcon='card'
                              value='Cartão'
                              onClick={ () => {} }
                              fill={ data.order.paymentType === 'card' }
                           />
                     </div>

                  </div>
               </div>
            </div>

            { data.order.paymentType === 'money' &&
               <div className={ styles.infoArea }>
                  <div className={ styles.infoTitle}>
                     Troco
                  </div>

                  <div className={ styles.infoBody}>
                     <InputField 
                        color={ data.tenant.mainColor }
                        placeholder='Quanto você tem em dinheiro?'
                        value={ data.order.paymentChange?.toString() ?? ''}
                        onChange={ () => { } }
                     />
                  </div>
               </div>
            }

            { data.order.cupom && 
               <div className={ styles.infoArea }>
                  <div className={ styles.infoTitle}>
                     Cupom de desconto
                  </div>

                  <div className={ styles.infoBody}>
                     <ButtonWithIcon
                        color={ data.tenant.mainColor } 
                        leftIcon='cupom'
                        rightIcon='checked'
                        value={ data.order.cupom.toUpperCase() }
                     />
                  </div>
               </div>
            }

         </div>

         <div className={ styles.resumeArea}>

            <div className={ styles.resumeItem}>
               <div className={ styles.resumeLeft}>
                  Subtotal
               </div>

               <div className={ styles.resumeRight}>
                  { formatter.formatPrice(data.order.subTotal) }
               </div>
            </div>

            { data.order.cupomDiscount &&
               <div className={ styles.resumeItem}>
                  <div className={ styles.resumeLeft}>
                     Desconto
                  </div>

                  <div className={ styles.resumeRight}>
                     - { formatter.formatPrice(data.order.cupomDiscount) }
                  </div>
               </div>
            }

            <div className={ styles.resumeItem}>
               <div className={ styles.resumeLeft}>
                  Frete
               </div>

               <div className={ styles.resumeRight}>
                  { data.order.shippingPrice > 0 ? formatter.formatPrice(data.order.shippingPrice) : '--' }
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
                  { formatter.formatPrice( data.order.total ) }
               </div>
            </div>
         </div>

      </div>
   )
}

export default OrderId

type Props = {
   tenant: Tenant
   products: Product[]
   token: string
   user: User | null
   order: Order
}

export const getServerSideProps: GetServerSideProps = async(context) => {
   const { tenant: tenantSlug, orderId } = context.query
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

   // Get Order
   const order = await api.getOrder(parseInt(orderId as string))
  

   return{
      props: {
         tenant,
         user,
         token,
         order
      }
   }
}