import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Movie } from "../types/movie";
import { getMovieList } from "../services/movies";

export default function Screen() {
   const [movies, setMovies] = useState<Movie[]>([])
   
   const getMovies = async() => {
      const moviesList = await getMovieList()

      setMovies(moviesList)
   }

   useEffect(() => {
      getMovies()
   }, [])

   return(
      <View style={ styles.container }>

         <Text style={ styles.h1 }>Filmes</Text>

         <Text>Quantidade de filmes: { movies.length }</Text>

         { movies.map(movie => (
            <View key={ movie.id }>
               <Text>Nome: {movie.title}</Text>
               
               <Text>Data de lançamento: {movie.releaseYear}</Text>
            </View>
         ))}

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