import { Button, StyleSheet, Text, View } from 'react-native'
import { useContext, useEffect, useState } from "react";
import { Area1 } from '../components/area1';
import { Area2 } from '../components/area2';
import { AuthContext } from '../contexts/auth';

export default function Screen() {
   const auth = useContext(AuthContext)

   const handleClick = () => {
      auth?.setData('Borys')
   }

   return(
      <View style={ styles.container }>
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