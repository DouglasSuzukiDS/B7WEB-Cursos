import { Button, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from "react";
import axios from 'axios';
import { req } from '../libs/axios';

export default function Screen() {
   const handleClick = async() => {
      const response = await req.post('/posts',
         {
            title: 'Novo Post',
            body: 'Corpo do novo post',
            userId: 1
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