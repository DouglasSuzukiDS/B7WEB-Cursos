// 'use client'
// import { useRouter } from "next/navigation" 

// const SobreItem = ({ params }:{ params:{ slug:string } }) => {
//    const router = useRouter()

//    // const slug = router.query.slug
//    const { slug } = params

//    return(
//       <div>Página de { slug }</div>
//    )
// }

// export default SobreItem

import { Layout } from "@/components/layout"
import { useRouter } from "next/router" 
import { useEffect } from "react"

const SobreItem = ( ) => {
   const router = useRouter()
   const { slug } = router.query

   useEffect(() => {
      const handleRouteChange = (url: string) => {
         console.log(`Indo para ${ url }`)
      }

      router.events.on('routeChangeComplete', handleRouteChange)
         // routeChangeStart => Começando a mudar de rota
         // routeChangeComplete => Mudança de rota completa

      return () => {
         router.events.off('routeChangeComplete', handleRouteChange)
      }
   }, [])

   return(
      <Layout>
         <>
            <div>Página de { slug }</div>
            <p>Pathname: { router.pathname }</p>

            {/* Se esta carregando */}
            <p>isFallback: { router.isFallback.toString() }</p>

            <button onClick={() => {
               router.push('/sobre/tonhao') // Armazena o historico

               //router.replace('/sobre/tonhao') // Nao salva o historico

               /*router.push({
                  pathname: '/sobre/[slug]',
                  query: { slug: 'tonhao' }
               })*/
            }}>Ir para página de Tonhao</button>
         </>
      </Layout>
   )
}

export default SobreItem