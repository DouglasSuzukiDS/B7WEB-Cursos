import { Pressable, Text, View } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome6'
import { ReactNode } from "react"

type Props = {
   title: string
   onPross: () => void
   children: ReactNode
}

export const ButtonCard = ({ title, onPross, children }: Props) => {
   return(
      <Pressable onPress={ onPross } className="px-4 py-8">
         <View className="mb-4 flex-row justify-between items-center">
            <Text className="text-2xl font-semibold">{ title }</Text>

            <View className="mr-3">
               <Icon 
                  name="chevron-right" size={ 16 } color="black" />
            </View>
         </View>

         { children }
      </Pressable>
   )
}