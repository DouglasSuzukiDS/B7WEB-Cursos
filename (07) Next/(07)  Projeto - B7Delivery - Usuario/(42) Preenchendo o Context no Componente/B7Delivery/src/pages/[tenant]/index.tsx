import SearchInput from '@/components/SearchInput'
import styles from '../../styles/Home.module.css'
import Banner from '@/components/Banner'
import ProductItem from '@/components/ProductItem'
import '../../app/globals.css'
import { getTenantResponse, useApi } from '@/libs/useApi'
import { GetServerSideProps } from 'next'
import { AppContextProvider, useAppContext } from '@/contexts/AppContext'
import { Tenant } from '@/types/Tenant'
import { useEffect } from 'react'
import HomeApp from './Home'

const Home = (data: Props) => {

   return(
      <AppContextProvider>
         <HomeApp tenant={ data.tenant }  />
      </AppContextProvider>
   )
}

export default Home

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