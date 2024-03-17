import axios from 'axios'
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import { GaleryType } from "../types/GaleryType"

export const Photos = () => {
   const api = 'https://jsonplaceholder.typicode.com'

   const { id, photoId } = useParams()

   const [loading, setLoading] = useState(false)
   const [galery, setGalery] = useState<GaleryType[]>([])

   //console.log('Tipo do photoID é ' + typeof photoId)

   useEffect(() => {
      getItem()
   }, [])

   const getItem = async () => {
      // https://jsonplaceholder.typicode.com/photos/1
      // await axios.get(`${api}/photos/${id}`)

      setLoading(true)

      await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
         .then(response => {
            setGalery(response.data)
         })
         .catch(e => console.log('Erro no getPhotos' + e))

      setLoading(false)
   }

   // console.log(galery)

   return (
      <>
         <Header />

         <main className='p-4 mt-2'>

            <Link to={`/albums/${id}`} className="rounded-full bg-cyan-500 text-sky-100 py-2 px-4 text-xl">Voltar</Link>

            {loading &&
               <h1 className='text-sky-300 font-bold text-2xl mt-4'>
                  <> Carregando... </>
               </h1>
            }

            {!loading &&
               <>
                  <h1 className='text-sky-300 font-bold text-2xl mt-4'>
                     Título: {galery[Number(photoId)]?.title}
                  </h1>

                  <article className='border p-2 mt-4 flex justify-center align-middle flex-wrap rounded grid-cols-5 gap-4'>
                     {
                        <img src={galery[Number(photoId)]?.url}
                           alt={'Erro'}
                           key={galery[Number(photoId)]?.albumId}
                        />
                     }
                  </article>
               </>
            }
         </main >

         <Footer />
      </>
   )
}