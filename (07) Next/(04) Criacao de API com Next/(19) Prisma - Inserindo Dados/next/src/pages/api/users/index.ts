import { Users } from "@/utils/users";
import { NextApiHandler } from "next";
import prisma from '../../../libs/prisma'

// Getting all users
const handlerGet: NextApiHandler = (req, res) => {
   // http://localhost:3000/api/users?limit=2
   const { limit } = req.query

   // http://localhost:3000/api/users?search=nick&age=20
   const { search, age } = req.query

   res.status(200).json(Users)
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