import { useNavigate, useParams } from "react-router-dom"

export const AboutItem = () => {
   const params = useParams()
   const navigate = useNavigate()

   const handleBackButton = () => {
      navigate(-1) // Volta para página anterior
   }

   const handleHomeButton = () => {
      let name: string = 'law'
      // navigate('/')
      navigate(`/sobre/${name}`)
   }

   return(
      <div>
         Página sobre {params.slug?.toLocaleUpperCase()} ({params.slug?.length} letras)
         <hr />

         <button onClick={ handleBackButton }>Voltar</button>
         <button onClick={ handleHomeButton }>Home</button>
      </div>
   )
}