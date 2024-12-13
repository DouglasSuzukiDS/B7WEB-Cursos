import { RequestHandler } from "express"
import * as galleryService from '../services/gallery'

export const createGallery: RequestHandler = async (req, res) => {
   const { title } = req.body

   if (title && title.length > 2) {
      const newGalellery = await galleryService.createGallery(title)

      res.status(201).json({ gallery: newGalellery })
   } else {
      res.json({ error: 'Galeria sem título' })
   }
}