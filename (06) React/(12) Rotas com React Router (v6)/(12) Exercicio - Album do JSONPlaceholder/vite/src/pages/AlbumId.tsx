import axios from 'axios'
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { AlbumType } from "../types/AlbumType"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import { GaleryType } from '../types/GaleryType'

export const AlbumId = () => {
   const api = 'https://jsonplaceholder.typicode.com'
   const { id } = useParams()
   
   const [loading, setLoading] = useState(false)
   const [albums, setAlbums] = useState<AlbumType[]>([])
   const [album, setAlbum] = useState<AlbumType[]>([])
   const [galery, setGalery] = useState<GaleryType[]>([])
   
   useEffect(() => {
      getAlbums()
      getPhotos()
      albumTitle()
   }, []) 
   
   const getAlbums = async() => {
      setLoading(true)

      await axios.get(`${api}/albums`)
         .then(response => {
            setAlbums(response.data) 
            albumTitle()
         })
         .catch(e => console.log('Erro no getAlbuns' + e))

      setLoading(false)
   }

   const getPhotos = async() => {
      // https://jsonplaceholder.typicode.com/albums/1/photos
      await axios.get(`${api}/albums/${id}/photos`)
         .then(response => {
            setGalery(response.data)
         })
         .catch(e => console.log('Erro no getPhotos' + e))
   }

   const albumTitle = async() => {
      let thisAlbum = albums.filter((album) => (album.id).toString() == id)
      // console.log(thisAlbum)
      return thisAlbum
   }

   const getAlbum = () => {
      return setAlbum(albums.filter((album) => (album.id).toString() == id))
   }

   return(
      <>
         <Header />

         <main className='p-4 mt-2'>
            
            <Link to='/' className="rounded-full bg-cyan-500 text-sky-100 py-2 px-4 text-xl">Voltar</Link>

            { loading &&
               <h1 className='text-sky-300 font-bold text-2xl mt-4'>
                  <> Carregando... </>
               </h1>
            }

            { !loading && 
               <>
                  <h1 className='text-sky-300 font-bold text-2xl mt-4'>
                     Título: { `${(albums.filter((album) => (album.id).toString() == id))[0]?.title}` }
                  </h1>

                  <article className='border p-2 mt-4 flex justify-center align-middle flex-wrap rounded grid-cols-5 gap-4'>
                     {
                        galery.map((pht, index) => (
                           <Link to={`/albums/${id}/photos/${index}`} key={ index }>
                              <img src={ pht.thumbnailUrl } className='border p-2 rounded' />
                           </Link>
                        ))
                     }
                  </article>
               </>
            }        
         </main >

         <Footer />
      </>
   )
}