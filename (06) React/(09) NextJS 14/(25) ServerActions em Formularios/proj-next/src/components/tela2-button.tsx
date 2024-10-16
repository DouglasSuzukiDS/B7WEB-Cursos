'use client'

import { useRouter } from "next/navigation"

export const Tela02Button = () => {
   const router = useRouter()
   router.prefetch('/tela2')
   // useRouter => Faz uma conexão com o histórico de navegação
      // back => Volta para a navegação anterior
      // forward => Avança para a próxima tela caso tiver
      // push => Adiciona uma nova tela ao histórico de navegação
      // replace => Substitui a tela atual pelo novo histórico de navegação
      // prefetch => Pre recarrega a pagina (semelhante ao Link)
      // refresh => Recarrega os componentes manstendo os falores dos states 
   const handleClick = () => {
      router.push('/tela2')
   }

   return(
      <button onClick={ handleClick }>
         Ir para tela 2
      </button>
   )
}