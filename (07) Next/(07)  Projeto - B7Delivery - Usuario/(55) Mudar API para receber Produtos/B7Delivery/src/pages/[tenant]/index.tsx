import SearchInput from '@/components/SearchInput'
import styles from '../../styles/Home.module.css'
import Banner from '@/components/Banner'
import ProductItem from '@/components/ProductItem'
import '../../app/globals.css'
import { useApi } from '@/libs/useApi'
import { GetServerSideProps } from 'next'
import { useAppContext } from '@/contexts/AppContext'
import { Tenant } from '@/types/Tenant'
import { useEffect } from 'react'

const Home = (data: Props) => {
   const { tenant, setTenant } = useAppContext()

   useEffect(() => {
      // console.log(data.tenant)
      setTenant(data.tenant)
   }, [])

   const handleSearch = (searchValue: string) => {
      console.log(`${ searchValue }`)
   }

   return(
      <div className={ styles.container }>
            <header className={ styles.header }>

               <div className={ styles.headerTop }>

                  <div className={ styles.headerTopLeft }>
                     <div className={ styles.headerTitle }>
                        Seja Bem Vindo (a) 👋
                     </div>

                     <div className={ styles.headerSubtitle }>
                        O que deseja pra hoje?
                     </div>
                  </div>

                  <div className={ styles.headerTopRight }>
                     <div className={ styles.menuButton }>
                        <div className={ styles.menuButtonLine } style={{ backgroundColor: tenant?.mainColor }}>
                        </div>

                        <div className={ styles.menuButtonLine } style={{ backgroundColor: tenant?.mainColor }}>
                        </div>

                        <div className={ styles.menuButtonLine } style={{ backgroundColor: tenant?.mainColor }}>
                        </div>
                     </div>
                  </div>

               </div>

               <div className={ styles.headerBottom }>
                  <SearchInput
                     onSearch={ handleSearch }
                  />  
               </div>

            </header>

            <Banner />

            <div className={ styles.grid }>
               <ProductItem 
                  data={{
                     id: 1,
                     image: '/tmp/Burger.png',
                     catName: 'Tradicional',
                     name: 'Texas Burger',
                     price: '25.90'
                  }} />
               
               <ProductItem 
                  data={{
                     id: 1,
                     image: '/tmp/Burger.png',
                     catName: 'Tradicional',
                     name: 'Texas Burger',
                     price: '25.90'
                  }} />
               
               <ProductItem 
                  data={{
                     id: 1,
                     image: '/tmp/Burger.png',
                     catName: 'Tradicional',
                     name: 'Texas Burger',
                     price: '25.90'
                  }} />
            </div>
      </div>
   )
}

export default Home

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