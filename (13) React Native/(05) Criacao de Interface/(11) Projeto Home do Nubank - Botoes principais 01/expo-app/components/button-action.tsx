import { Pressable, Text, View } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome6'

type Props = {
   icon: string
   label: string
   onPress: () => void
   badge?: string
}

export const ButtonAction = ({ icon, label, onPress, badge }: Props) => {
   return(
      <Pressable onPress={ onPress }>
         <View>
            <Icon name={ icon } size={ 24 } color="black" />
         </View>

         <Text>{ label }</Text>
      </Pressable>
   )
}