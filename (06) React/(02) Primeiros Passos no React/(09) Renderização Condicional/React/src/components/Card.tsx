import { ReactNode } from "react"

type Props = {
   phase: string
   author?: string
}

export const Card = ({ phase, author }: Props) => {
   return(
      <div className="w-96 border-2 border-red-600 -3 text-3xl text-center italic">
          <h3 className="text-3xl font-bold italic">
            { phase }
         </h3>
          <p className="text-right text-sm"> 
            {/* { author ? author : 'Autor Desconhecido' }  */}
            { author ?? 'Autor Desconhecido' }
         </p>
      </div>
   )
}