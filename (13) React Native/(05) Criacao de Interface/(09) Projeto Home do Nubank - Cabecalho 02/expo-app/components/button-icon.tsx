import { Pressable, Text, View } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome6'

type Props = {
   icon: string
   onPress: () => void
}

export const ButtonIcon = ({ icon, onPress }: Props) => {
   return(
      <Pressable 
         className="size-14 justify-center items-center rounded-full"
         onPress={ onPress }>
         <Text>
            <Icon name={ icon } size={ 18 } color="white" />
         </Text>
   </Pressable>
   )
}