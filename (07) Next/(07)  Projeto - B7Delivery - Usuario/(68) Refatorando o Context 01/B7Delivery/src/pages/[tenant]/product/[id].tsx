import styles from '@/styles/Product-id.module.css'
import '@/app/globals.css'
import { useApi } from '@/libs/useApi'
import { GetServerSideProps } from 'next'
import { useAppContext } from '@/contexts/AppContext'
import { Tenant } from '@/types/Tenant'
import { useEffect, useState } from 'react'
import { Product } from '@/types/Product'
import Head from 'next/head'
import { Header } from '@/components/Header'
import { Button } from '@/components/Button'
import { useFormater } from '@/libs/useFormater'
import { Quantity } from '@/components/Quantity'

const ProductItem = (data: Props) => {
   const { tenant, setTenant } = useAppContext()

   useEffect(() => {
      // console.log(data.tenant)
      setTenant(data.tenant)
   }, [])

   const [qtCount, setQtCount] = useState(1)

   const formatter = useFormater()

   const handleAddToCart = () => {

   }

   const handleUpdateQt = (newCount: number) => {
      setQtCount(newCount)
   }

   return(
      <div className={ styles.container }>
         <Head>
            <title>{ data.product.name } | { data.tenant.name }</title>
         </Head>

         <div className={ styles.headerArea }>
            <Header 
               color={ data.tenant.mainColor }
               backHref={ `/${ data.tenant.slug }` }
               title='Produto'
               invert
            />
         </div>

         <div 
            className={ styles.headerBg }
            style={{ 
               backgroundColor: data.tenant.mainColor 
            }}></div>

         <div className={ styles.productImage }>
            <img src={ data.product.image } alt={ `Foto do ${ data.tenant.name }` } />
         </div>

         <div className={ styles.category }>
            { data.product.catName }
         </div>

         <div 
            className={ styles.title } 
            style={{ borderBottomColor: data.tenant.mainColor }}>
            { data.product.name } 
         </div>

         <div className={ styles.line }></div>

         <div className={ styles.description }>
            { data.product.description }
         </div>

         <div className={ styles.qtText }>Quantidade</div>

         <div className={ styles.area }>
            <div className={ styles.areaLeft}>
               <Quantity 
                  color={ data.tenant.mainColor }
                  count={ qtCount }
                  onUpdateCount={ handleUpdateQt }
                  min={ 1 }
               />
            </div>

            <div 
               className={ styles.areaRight }
               style={{ color: data.tenant.mainColor }}>
               { formatter.formatPrice(data.product.price) }
            </div>
         </div>

         <div className={ styles.buttonArea }>
            <Button 
               color={ data.tenant.mainColor }
               label='Adicionar a sacola'
               onClick={ handleAddToCart }
               fill
            />
         </div>
      </div>
   )
}

export default ProductItem

type Props = {
   tenant: Tenant
   product: Product
}

export const getServerSideProps: GetServerSideProps = async(context) => {
   const { tenant: tenantSlug, id } = context.query
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

   // Get Products
   const product = await api.getProduct(id as string)

   return{
      props: {
         tenant,
         product
      }
   }
}