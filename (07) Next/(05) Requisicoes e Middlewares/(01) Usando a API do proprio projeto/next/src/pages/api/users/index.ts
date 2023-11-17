import { Users } from "@/utils/users";
import { NextApiHandler } from "next";
import prisma from '../../../libs/prisma'

// Getting all users
const handlerGet: NextApiHandler = async(req, res) => {
   const { page } = req.query

   let take = 2
   let skip = 0

   if(page) {
      skip = (parseInt(page as string) - 1) * take
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

   res.status(200).json({ status: true, users })
}

// Inserting new user
const handlerPost: NextApiHandler = async(req, res) => {
   const { name, email } = req.body

   const newUser = await prisma.user.create({
      data: { name, email }
   }).catch((e) => {
      console.log(e)
      // meta.taget => Onde fica os erros
      res.json({ error: 'Não criou o usuário' })
   })

   if(newUser) {
      res.status(201).json({ status: true, user: newUser })
   }

}

const handler: NextApiHandler = async(req, res) => {
   /*if(req.method === 'GET') {
      res.json(Users)
   } else if(req.method === 'POST') {
      res.json({ status: true })
   }*/ 

   switch(req.method) {
      case 'GET':
         handlerGet(req, res)
         break
      case 'POST':
         handlerPost(req, res)
         break
   }
}

export default handler