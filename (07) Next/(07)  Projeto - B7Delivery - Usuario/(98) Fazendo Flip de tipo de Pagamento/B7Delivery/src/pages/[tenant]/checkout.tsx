import styles from '../../styles/Checkout.module.css'
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
import { InputField } from '@/components/InputField'
import { Button } from '@/components/Button'
import { useFormatter } from '@/libs/useFormatter'
import { CartItem } from '@/types/CartItem'
import { useRouter } from 'next/router'
import { CartProductItem } from '@/components/CartProductItem'
import { CartCookie } from '@/types/CartCookie'
import { ButtonWithIcon } from '@/components/ButtonWithIcon'
import { Address } from '@/types/Address'

const Checkout = (data: Props) => {
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

   // Product Control
   const [cart, setCart] = useState<CartItem[]>(data.cart)

   // Shipping
   const [shippingPrice, setShippingPrice] = useState(0)
   const [shippingAddress, setShippingAddress] = useState<Address>()

   const handleChangeAddress = () => {
      // router.push(`/${ data.tenant.slug }/myaddress`)
      setShippingAddress({
         id: 1,
         cep: '99999-999',
         street: 'Rua blabla',
         number: '123',
         neighborhood: 'São Paulo',
         city: 'São Paulo',
         state: 'SP'
      })

      setShippingPrice(9.50)
   }

   // Payments
   const [paymentType, setPaymentType] = useState<'money' | 'card'>('money')
   const [paymentChange, setPaymentChange] = useState(0)

   // Resume
   const [subTotal, setSubTotal] = useState(0)

   useEffect(() => {
      let sub = 0

      for(let i in cart) {
         sub += cart[i].product.price * cart[i].qt
      }

      setSubTotal(sub)
   }, [cart])

   const handleFinish = () => {
      // router.push(`/${ data.tenant.slug }/checkout`)
   }

   return(
      <div className={ styles.container }>
         <Head>
            <title>Checkout | { data.tenant.name }</title>
         </Head>

         <Header 
            backHref={ `/${ data.tenant.slug }` }
            color={ data.tenant.mainColor }
            title='Checkout'
         />

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
                     value={ shippingAddress ? `${ shippingAddress.street } ${ shippingAddress.number } - ${ shippingAddress.city }` : 'Escolha um endereço' }
                     onClick={ handleChangeAddress }
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
                           onClick={ () => setPaymentType('money') }
                           fill={ paymentType === 'money'}
                        />
                     </div>

                     <div className={ styles.paymentBtn}>
                           <ButtonWithIcon
                              color={ data.tenant.mainColor } 
                              leftIcon='card'
                              value='Cartão'
                              onClick={ () => setPaymentType('card') }
                              fill={ paymentType === 'card' }
                           />
                     </div>

                  </div>
               </div>
            </div>

            { paymentType === 'money' &&
               <div className={ styles.infoArea }>
                  <div className={ styles.infoTitle}>
                     Troco
                  </div>

                  <div className={ styles.infoBody}>
                     <InputField 
                        color={ data.tenant.mainColor }
                        placeholder='Quanto você tem em dinheiro?'
                        value={ paymentChange ? paymentChange.toString() : '' }
                        onChange={ newValue => setPaymentChange(parseInt(newValue)) }
                     />
                  </div>
               </div>
            }

            <div className={ styles.infoArea }>
               <div className={ styles.infoTitle}>
                  Cupom de desconto
               </div>

               <div className={ styles.infoBody}>
                  <ButtonWithIcon
                     color={ data.tenant.mainColor } 
                     leftIcon='cupom'
                     rightIcon='checked'
                     value='TEST123'
                  />
               </div>
            </div>
         </div>

         <div className={ styles.productsQuantity }>
            { cart.length } { cart.length === 1 ? 'item' : 'itens' } 
         </div>

         <div className={ styles.productsList}>
            { cart.map((cartItem, index) => (
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
                  { shippingPrice > 0 ? formatter.formatPrice(shippingPrice) : '--' }
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
                  label='Finalizar Pedido'
                  onClick={ handleFinish }
                  fill
                  disabled={ !shippingAddress }
               />
            </div>

         </div>

      </div>
   )
}

export default Checkout

type Props = {
   tenant: Tenant
   products: Product[]
   token: string
   user: User | null
   cart: CartItem[]
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

   // Get Cart Products
   const cartCookie = getCookie('cart', context)
   // console.log('Cart', cartCookie)
   const cart = await api.getCartProducts(cartCookie as string)
  

   return{
      props: {
         tenant,
         user,
         token,
         cart
      }
   }
}