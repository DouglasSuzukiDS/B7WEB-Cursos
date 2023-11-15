import { Users } from "@/utils/users";
import { NextApiHandler } from "next";
import prisma from '../../../libs/prisma'

// Getting all users
const handlerGet: NextApiHandler = async(req, res) => {
   const users = await prisma.user.findMany({
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
         id: 'desc'
      }
   })

   res.status(200).json({ status: true, users })
}

// Inserting new user
const handlerPost: NextApiHandler = async(req, res) => {
   const { name, email } = req.body

   const newUser = await prisma.user.create({
      data: { name, email }
   })

   res.status(201).json({ status: true, user: newUser })
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