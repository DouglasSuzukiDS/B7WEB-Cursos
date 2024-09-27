import { Button, StyleSheet, Text, View } from 'react-native'
import { useContext, useEffect, useReducer, useState } from "react";
import { Area1 } from '../components/area1';
import { Area2 } from '../components/area2';
import { AuthContext } from '../contexts/auth';
import { ageReducer } from '../reducers/age';

export default function Screen() {
   const [age, setAge] = useState(20)
   const [ageReducerState, ageReducerDispatch] = useReducer(ageReducer, 10)

   const handleIncreaseAge = () => {
      ageReducerDispatch({ 
         type: 'INCREASE'
      })
   }

   const handleDecreaseAge = () => {
      ageReducerDispatch({ 
         type: 'DECREASE'
      })
   }

   const auth = useContext(AuthContext)

   const handleClick = () => {
      auth?.setData('Borys')
   }

   return(
      <View style={ styles.container }>
         <Text>Idade: { ageReducerState }</Text>

         <Button 
            title='Aumentar Idade'
            onPress={ handleIncreaseAge }
         />

         <Button 
            title='Diminuir Idade'
            onPress={ handleDecreaseAge }
         />

         <Text>Nome: { auth?.data }</Text>
         <Area1  />
         <Area2 />

         <Button 
            title='Mudar o nome'
            onPress={ handleClick }
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   }
})