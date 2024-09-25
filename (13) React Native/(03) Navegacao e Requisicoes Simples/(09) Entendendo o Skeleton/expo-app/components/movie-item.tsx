import { StyleSheet, Text, View } from "react-native"
import { Movie } from "../types/movie"

type Props = {
   movie: Movie
}

export const MovieItem = ({ movie }: Props) => {
   return(
      <View style={ styles.container }>
         <Text style={ styles.h2 }> {movie.title} </Text>
               
         <Text style={ styles.lauchDate }>
            Data de lançamento: {movie.releaseYear}
         </Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#DDD',
      padding: 20,
      margin: 10,
      borderRadius: 10
   },

   h2: {
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold'
   },

   lauchDate: {
      marginTop: 10,
      textAlign: 'center'
   },

   skeletonH2: {
      backgroundColor: '#CCC',
      height: 30,
      borderRadius: 10,
      marginBottom: 10
   },

   skeletonLauchDate: {
      backgroundColor: '#CCC',
      height: 15,
      borderRadius: 10
   }
})

export const MovieItemSkeleton = () => {
   return(
      <View style={ styles.container }>
         <Text style={ styles.skeletonH2 }></Text>

         <Text style={ styles.skeletonLauchDate }></Text>
      </View>
   )
}