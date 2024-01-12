import type { AppProps } from 'next/app'
import { AppContextProvider } from '@/contexts/AppContext'

export default function MyApp({ Component, pageProps }: AppProps) {

   return (
      <AppContextProvider>
         <Component {...pageProps} />
      </AppContextProvider>
   )
}