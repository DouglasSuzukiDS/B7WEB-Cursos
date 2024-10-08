import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"
import { prisma } from "../libs/prisma"
import { Prisma } from "@prisma/client"

/*export const createUser = async (name: string, email: string) => {
   const user = await prisma.user.create({
      data: { name: name, email: email }
   })

   return user
}*/

type CreateUserProps = {
   name: string
   email: string
}

export const createUser = async (data: Prisma.UserCreateInput) => {
   try {
      const user = await prisma.user.create({ data })

      return user
   } catch (error) {
      // if(error instanceof PrismaClientKnownRequestError) {
      //    if(error.code === 'P2002') {

      //    }
      // }

      return false
   }

}