'use client'
import { useRouter } from "next/navigation" 

const SobreItem = ({ params }:{ params:{ slug:string } }) => {
   const router = useRouter()

   // const slug = router.query.slug
   const { slug } = params

   return(
      <div>Página de { slug }</div>
   )
}

export default SobreItem