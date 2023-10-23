import { ReactNode } from "react"

type Props = {
   url?: string
   legend: string
   children: ReactNode // Quando se tem algo sendo passando dentro do componente
}

export const Photo = ({ url, legend, children }: Props) => {
   return(
      <>
         { children }
         <p>{legend}</p>
      </>
   )
}