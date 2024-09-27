import { Button, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Screen() {
   const handleClick = async() => {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts',
         {
            title: 'Novo Post',
            body: 'Corpo do novo post',
            userId: 1
         }, 
         // Opcional
         {
            headers: {
               'Authorization': 'Bearer 123'
            }
         }
      )

      if(response.status === 201) {
         console.log(response.data)
      }
   }

   return(
      <View style={ styles.container }>
         <Button 
            title='Inserir Post Novo'
            onPress={ handleClick } 
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },

   movieCount: {
      fontSize: 24,
      textAlign: 'center',
      margin: 20
   }
})