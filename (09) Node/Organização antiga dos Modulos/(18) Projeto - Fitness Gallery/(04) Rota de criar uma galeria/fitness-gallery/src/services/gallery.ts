import { prisma } from '../libs/prisma'

export const createGallery = async (title: string) => {
   const newGalellery = await prisma.gallery.create({
      data: { title },
   })

   return newGalellery
}