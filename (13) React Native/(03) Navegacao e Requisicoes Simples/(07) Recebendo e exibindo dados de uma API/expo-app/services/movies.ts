import { Movie } from "../types/movie"

export const getMovieList = async() => {
   const response = await fetch('https://reactnative.dev/movies.json')
   const json = await response.json()

   if(json.movies) return json.movies as Movie[]

   return []
}