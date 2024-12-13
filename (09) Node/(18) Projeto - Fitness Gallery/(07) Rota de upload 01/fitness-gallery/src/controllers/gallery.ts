import { RequestHandler } from "express"
import * as galleryService from '../services/gallery'
import * as photoService from '../services/photo'
import fs from 'fs/promises'

export const createGallery: RequestHandler = async (req, res) => {
   const { title } = req.body

   if (title && title.length > 2) {
      const newGalellery = await galleryService.createGallery(title)

      res.status(201).json({ gallery: newGalellery })
   } else {
      res.json({ error: 'Galeria sem título' })
   }
}

export const getGalleries: RequestHandler = async (req, res) => {
   const galleries = await galleryService.getGalleries()

   res.json({ list: galleries })
}

export const getPhotosFromGallery: RequestHandler = async (req, res) => {
   const { id } = req.params

   const gallery = await galleryService.getGallery(parseInt(id))

   const photos = await photoService.getPhotos(parseInt(id))

   res.json({ gallery, photos })
}

export const upload: RequestHandler = async (req, res) => {
   if (req.file) {
      const { gallery } = req.body

      const gal = await galleryService.getGallery(parseInt(gallery)) // Verifica se a galeria existe

      if (gal) {

      } else {
         await fs.unlink(req.file.path) // Deleta a foto temporaria

         res.json({ error: 'Galeria inexistente' })
      }
   } else {
      res.json({ error: 'Nenhum arquivo enviado' })
   }
}