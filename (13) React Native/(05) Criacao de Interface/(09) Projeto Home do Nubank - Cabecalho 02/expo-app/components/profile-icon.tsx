import { Pressable, Text } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome6'

export const ProfileIcon = () => {
   return(
      <Pressable 
         className="size-16 bg-white/40 justify-center items-center rounded-full"
         onPress={ () => {} }>
         <Text>
            <Icon name="user" size={ 18 } color="white" />
         </Text>
      </Pressable>
   )
}