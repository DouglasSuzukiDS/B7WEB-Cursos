import { Button, StyleSheet, Text, View } from 'react-native'
import { useContext, useEffect, useState } from "react";
import { Area1 } from '../components/area1';
import { Area2 } from '../components/area2';
import { auth } from '../contexts/auth';

export default function Screen() {
   const authContext = useContext(auth)

   const handleClick = () => {
      
   }

   return(
      <View style={ styles.container }>
         <Text>{ authContext }</Text>
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