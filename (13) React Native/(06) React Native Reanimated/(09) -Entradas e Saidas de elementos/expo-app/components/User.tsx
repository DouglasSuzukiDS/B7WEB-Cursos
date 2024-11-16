import { StyleSheet, Text, View } from "react-native"
import Animated, { BounceIn, BounceInLeft, BounceInUp, BounceOutDown } from "react-native-reanimated"

type Props = {
   name: string
}

export const User = ({ name }: Props) => {
   return (
      <Animated.View
         entering={BounceInUp} // Quando o elemento aparecer na tela
         // BounceInLeft
         // BounceIn
         exiting={BounceOutDown} // Quando o elemento ser removido
         style={styles.area}>
         <Text style={styles.text}>{name}</Text>
      </Animated.View>
   )
}

const styles = StyleSheet.create({
   area: {
      backgroundColor: 'green',
      padding: 20,
      margin: 10,
      borderRadius: 10,
   },

   text: {
      fontSize: 18
   }
})