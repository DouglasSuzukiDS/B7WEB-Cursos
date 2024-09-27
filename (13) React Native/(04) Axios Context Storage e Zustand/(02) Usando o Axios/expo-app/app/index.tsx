import { Button, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Screen() {
   const [loading, setLoading] = useState(true)
   const [movieCount, setMovieCount] = useState<number>(0)

   const handleClick = async() => {
      const response = await axios.get('https://reactnative.dev/movies.json')
      
      if(response.status === 200) {
         setMovieCount(response.data.movies.length)
      }
   }

   return(
      <View style={ styles.container }>
         <Text style={ styles.movieCount }>
            Filmes: { movieCount }
         </Text>

         <Button 
            title='Carregar'
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