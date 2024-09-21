import { StyleSheet, Text, View } from "react-native"
import { router } from "expo-router"

export default function Screen() {
   return(
      <View style={ styles.container }>
         <Text style={ styles.text }>
            Projeto desenvolvido no Módulo 02 - Expo CLI e Router de React Native da B7WEB
         </Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },

   text: {
      fontSize: 24,
      fontWeight: 'bold'
   }
})