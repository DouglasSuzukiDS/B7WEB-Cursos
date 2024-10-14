import { vars } from 'nativewind'
import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../utils/theme'

export default function Screen() {
   console.log(theme)
   return(
      <View style={ vars(theme) }>
         <Text className="text-3xl text-primaria">Título</Text>
         <Text className="text-3xl text-secundaria">Subtitulo</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },

   h1: {
      fontSize: 24,
      textAlign: 'center',
      marginVertical: 20,
   }
})