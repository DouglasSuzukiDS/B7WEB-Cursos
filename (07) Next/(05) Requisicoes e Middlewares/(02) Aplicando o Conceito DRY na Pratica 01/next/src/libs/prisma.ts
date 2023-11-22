import { PrismaClient } from '@prisma/client'

declare global {
   var prisma: PrismaClient | undefined
}

// Mantém a conexão com o Banco
const prisma = global.prisma || new PrismaClient()

if(process.env.NODE_ENV !== 'production') {
   global.prisma = prisma
}

export default prisma