import { Button, StyleSheet, Text, View } from 'react-native'
import { useCounter } from '../stores/counter';


export default function Screen() {
   const count = useCounter(state => state.count)
   // const counter2 = useCounter(({ count }) => count) // Forma 02
   const increaseCount = useCounter(state => state.increaseCount)
   const decreaseCount = useCounter(state => state.decreaseCount)

   // Assim você pega todos os atributos de uma só vez
   const counter = useCounter(state => state)

   const handlePlusButton = () => {
      // increaseCount()
      counter.increaseCount()
   }

   const handleMinusButton = () => {
      // decreaseCount()
      counter.decreaseCount()
   }

   const handle50Button = () => {
      counter.setCount(50)
   }

   return(
      <View style={ styles.container }>
         <Text style={ styles.h1 }>Contagem: { count }</Text>

         <Button title="+" onPress={ handlePlusButton } />
         <Button title="-" onPress={ handleMinusButton } />
         <Button title="50" onPress={ handle50Button } />
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