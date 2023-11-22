import prisma from "./prisma"

export default {
   getAllUsers: async(page: number) => {
      let take = 2
      let skip = 0

      if(page) {
         skip = (page - 1) * take
      }

      const users = await prisma.user.findMany({
         skip,
         take,
         where: {
            active: true
         },
         select: { // Para retornar ou não os campos
            id: true,
            name: true,
            email: true,
            active: true
         },
         orderBy: {
            id: 'asc'
         }
      })

      return  users
   }
}