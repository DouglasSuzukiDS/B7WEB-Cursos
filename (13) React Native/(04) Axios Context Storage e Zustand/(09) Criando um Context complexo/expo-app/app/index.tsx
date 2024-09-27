import { Button, StyleSheet, Text, View } from 'react-native'
import { useContext, useEffect, useReducer, useState } from "react";
import { Area1 } from '../components/area1';
import { Area2 } from '../components/area2';
import { AuthContext } from '../contexts/auth';
import { User } from '../types/User';


export default function Screen() {
   const auth = useContext(AuthContext)

   const handleClick = () => {
      const newUser: User = {
         name: 'Borys',
         email: 'borys@email.com'
      }
      
      auth?.dispatch({
         type: 'SET_USER',
         payload: newUser
      })
   }

   return(
      <View style={ styles.container }>
         <Text>Nome: { auth?.data.user?.name }</Text>
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