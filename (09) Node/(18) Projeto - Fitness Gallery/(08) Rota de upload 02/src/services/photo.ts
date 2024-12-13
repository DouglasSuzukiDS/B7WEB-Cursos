import { v4 } from "uuid"
import { prisma } from "../libs/prisma"
import sharp, { fit } from "sharp"
import fs from 'fs/promises'

export const getPhotos = async (galleryId: number) => {
   const photos = await prisma.photo.findMany({
      where: { galleryId },
      select: { id: true, fileName: true }
   })

   const photosWithUrl = photos.map(photo => ({
      id: photo.id,
      url: `${process.env.BASE_URL}/images/${photo.fileName}`,
      thumb: `${process.env.BASE_URL}/images/thumb/${photo.fileName}`
   }))

   return photosWithUrl
}

export const handleRawPhoto = async (tmpPath: string) => {
   const newName = v4() + '.jpg'

   const image = await sharp(tmpPath)
      .resize(1000, 1000, { fit: 'cover' })
      .toBuffer() // Salva a imagem no buffer

   await sharp(image)
      .resize(200)
      .toFile(`./public/images/thumb/${newName}`) // Salva a thumbnail

   await sharp(image)
      .composite([
         { input: './src/assets/watermark.png' } // Insere a marca d'agua
      ])
      .toFile(`./public/images/${newName}`) // Salava o arquivo

   await fs.unlink(tmpPath) // Deleta o arquivo temporário

   return newName
}

export const createPhoto = async (galleryId: number, fileName: string) => {
   const newPhoto = await prisma.photo.create({
      data: { galleryId, fileName }
   })

   return newPhoto
}