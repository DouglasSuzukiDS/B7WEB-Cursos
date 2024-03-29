import SearchInput from '@/components/SearchInput'
import styles from '../../styles/Home.module.css'
import Banner from '@/components/Banner'
import ProductItem from '@/components/ProductItem'
import '../../app/globals.css'
import { useApi } from '@/libs/useApi'
import { GetServerSideProps } from 'next'
import { useAppContext } from '@/contexts/app'
import { Tenant } from '@/types/Tenant'
import { useEffect, useState } from 'react'
import { Product } from '@/types/Product'
import { Sidebar } from '@/components/Sidebar'
import { getCookie } from 'cookies-next'
import { User } from '@/types/User'
import { useAuthContext } from '@/contexts/auth'

const Home = (data: Props) => {
   const { setToken, setUser } = useAuthContext()
   const { tenant, setTenant } = useAppContext()

   useEffect(() => {
      // console.log(data.tenant)
      setTenant(data.tenant)
      setToken(data.token)

      if(data.user) setUser(data.user)
   }, [])

   const [products, setProducts] = useState<Product[]>(data.products)
   
   const [ sidebarOpen, setSidebarOpen] = useState(false)

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
                     <div 
                        className={ styles.menuButton }
                        onClick={ () => setSidebarOpen(true) }>

                        <div className={ styles.menuButtonLine } style={{ backgroundColor: tenant?.mainColor }}>
                        </div>

                        <div className={ styles.menuButtonLine } style={{ backgroundColor: tenant?.mainColor }}>
                        </div>

                        <div className={ styles.menuButtonLine } style={{ backgroundColor: tenant?.mainColor }}>
                        </div>
                     </div>

                     <Sidebar 
                        tenant={ data.tenant } 
                        open={ sidebarOpen }
                        onClose={ () => setSidebarOpen(false) }
                     />
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
               { products.map((item, index) => (
                  <ProductItem
                     key={ index }
                     data={ item }
                  />
               )) }
            </div>
      </div>
   )
}

export default Home

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
   const token = getCookie('token', context)
   const user = await api.authorizeToken(token as string)

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