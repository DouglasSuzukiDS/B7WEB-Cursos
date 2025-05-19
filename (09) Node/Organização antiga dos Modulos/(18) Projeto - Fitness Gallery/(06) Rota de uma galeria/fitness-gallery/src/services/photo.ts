import { prisma } from "../libs/prisma"

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