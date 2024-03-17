import { useParams } from "react-router-dom"

export const AboutItem = () => {
   const params = useParams()
   return(
      <div>
         Página sobre {params.slug?.toLocaleUpperCase()} ({params.slug?.length} letras)
      </div>
   )
}