import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Movie } from "../types/movie";
import { getMovieList } from "../services/movies";

export default function Screen() {
   const [loading, setLoading] = useState(false)
   const [movies, setMovies] = useState<Movie[]>([])
   
   const getMovies = async() => {
      setLoading(true)

      const moviesList = await getMovieList()

      setMovies(moviesList)

      setLoading(false) 
   }

   useEffect(() => {
      getMovies()
   }, [])

   return(
      <View style={ styles.container }>

         <Text style={ styles.h1 }>Filmes</Text>

         { loading && <Text>Carregando ...</Text> }

         { !loading && movies.length === 0 && <Text>Não há filmes na lista</Text> }

         { !loading && movies.length > 0 &&
            movies.map(movie => (
               <View key={ movie.id }>
                  <Text>Nome: {movie.title}</Text>
                  
                  <Text>Data de lançamento: {movie.releaseYear}</Text>
               </View>
            ))
         }

      </View>
   )
}
 
const styles = StyleSheet.create({
   container: {
      flex: 1
   },

   h1: {
      fontSize: 30,
      margin: 20,
      textAlign: 'center'
   }
})