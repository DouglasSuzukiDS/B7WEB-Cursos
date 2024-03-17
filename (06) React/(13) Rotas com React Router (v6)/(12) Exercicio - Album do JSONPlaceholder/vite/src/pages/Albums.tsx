import axios from 'axios'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { AlbumType } from "../types/AlbumType"

export const Albums = () => {
  const api = 'https://jsonplaceholder.typicode.com'

  const [loading, setLoading] = useState(false)
  const [albums, setAlbums] = useState<AlbumType[]>([])

   useEffect(() => {
     getAlbums()
   }, []) 

  const getAlbums = async() => {

    setLoading(true)

   await axios.get(`${api}/albums`)
    .then(response => {
      setAlbums(response.data)
    })
    .catch(e => console.log(e))

    setLoading(false)
  }

  // console.log(albums)

   return(
      <main className='mb-4'>
        { loading && 
          <h1 className='text-red-600 font-bold'>Carregando albuns. Aguarde ....</h1>
        }

        { !loading &&
          <main className='p-4 border rounded mt-4'>
            {
              albums.map((album, key) => (
                <Link to={ `/albums/${album.id}` } key={ key }>
                  <div key={ key } className='border border-slate-400 rounded p-4 mb-2 bg-slate-500 hover:bg-slate-600'> 
                    { album.title } 
                  </div>
                </Link>
              ))
            }
          </main>
        }

      </main>
   )
}