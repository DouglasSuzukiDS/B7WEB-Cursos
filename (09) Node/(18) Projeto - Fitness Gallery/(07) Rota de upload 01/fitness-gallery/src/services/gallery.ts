import { prisma } from '../libs/prisma'

export const createGallery = async (title: string) => {
   const newGalellery = await prisma.gallery.create({
      data: { title },
   })

   return newGalellery
}

export const getGalleries = async () => {
   const galleries = await prisma.gallery.findMany({
      orderBy: { id: 'desc' },
      include: {
         photos: {
            select: { fileName: true },
            take: 1,
            orderBy: { id: 'asc' }
         }
      }
   })

   const galleriesWithThumb = galleries.map(gallery => ({
      id: gallery.id,
      title: gallery.title,
      thumb: gallery.photos[0] ? `${process.env.BASE_URL}/images/thumb/${gallery.photos[0].fileName}` : null

   }))

   return galleriesWithThumb
}

export const getGallery = async (galleryId: number) => {
   const gallery = await prisma.gallery.findUnique({
      where: { id: galleryId },
      select: { id: true, title: true }
   })

   return gallery
}