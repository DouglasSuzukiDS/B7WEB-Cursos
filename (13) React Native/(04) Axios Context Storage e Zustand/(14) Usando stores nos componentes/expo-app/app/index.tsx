import { Button, StyleSheet, Text, View } from 'react-native'
import { useCounter } from '../stores/counter';


export default function Screen() {
   const count = useCounter(state => state.count)
   // const counter2 = useCounter(({ count }) => count) // Forma 02

   return(
      <View style={ styles.container }>
         <Text>Contagem: { count }</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   }
})