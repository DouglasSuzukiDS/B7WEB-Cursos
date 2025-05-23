import { v4 as uuid } from 'uuid'
import { prisma } from "../libs/prisma"

export const generateOTP = async(userId: number) => {
   let otpArray: number[] = []

   for(let i = 0; i < 6; i++) {
      otpArray.push(Math.floor(Math.random() * 9))
   }

   let code = otpArray.join('')
   let expiresAt = new Date()
   expiresAt.setMinutes(expiresAt.getMinutes() + 30)

   const otp = await prisma.otp.create({
      data: {
         id: uuid(),
         code,
         userId,
         expiresAt
      }
   })

   return otp
}