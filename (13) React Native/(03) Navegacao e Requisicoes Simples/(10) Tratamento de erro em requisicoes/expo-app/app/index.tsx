import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Movie } from "../types/movie";
import { getMovieList } from "../services/movies";
import { MovieItem, MovieItemSkeleton } from "../components/movie-item";

export default function Screen() {
   const [error, setError] = useState(false)
   const [loading, setLoading] = useState(false)
   const [movies, setMovies] = useState<Movie[]>([])
   
   const getMovies = async() => {
      setLoading(true)

      const moviesList = await getMovieList()
      setLoading(false) 

      if(moviesList === false) {
         setError(true)
      } else {
         setMovies(moviesList)
         setError(false)
      }

   }

   useEffect(() => {
      getMovies()
   }, [])

   return(
      <View style={ styles.container }>

         <Text style={ styles.h1 }>Filmes</Text>

         { loading && <>
            <MovieItemSkeleton />
            <MovieItemSkeleton />
            <MovieItemSkeleton />
         </> }

         { loading && movies.length === 0 && !error && 
            <Text> Não há filmes na lista</Text>
         }

         { !loading && movies.length === 0 && error && 
            <>
               <Text>Ocorreu um erro</Text>

               <Button title="Tentar novamente" onPress={ getMovies } />
            </>
         }

         { !loading && movies.length > 0 &&
            movies.map(movie => (
               <MovieItem key={ movie.id } movie={ movie } />
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