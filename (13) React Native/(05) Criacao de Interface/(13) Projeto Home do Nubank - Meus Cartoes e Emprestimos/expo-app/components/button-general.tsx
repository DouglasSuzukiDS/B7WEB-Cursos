import { ReactNode } from "react"
import { Pressable } from "react-native"

type Props = {
   children: ReactNode
   onPress: () => void
}

export const ButtonGeneral = ({ children, onPress }: Props) => {
   return(
      <Pressable 
         onPress={ onPress }
         className="bg-gray-200 rounded p-5">
         { children }
      </Pressable>
   )
}