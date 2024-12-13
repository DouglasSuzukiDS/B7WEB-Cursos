import { ReactNode } from "react"

type Props = {
   onClose: () => void
   children: ReactNode
}

export const Modal = ({ onClose, children }: Props) => {
   return(
      <div>
         { children }
      </div>
   )
}