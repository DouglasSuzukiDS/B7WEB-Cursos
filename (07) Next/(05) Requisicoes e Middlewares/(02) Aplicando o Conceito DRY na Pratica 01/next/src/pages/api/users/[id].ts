import { Users } from "@/utils/users";
import { NextApiHandler } from "next";
import prisma from '../../../libs/prisma'

// Reading user info
const handlerGet: NextApiHandler = async(req, res) => {
   const { id } = req.query

   /*let myUser = null

   for(let i in Users) {
      if(Users[i].id.toString() === id) {
         myUser = Users[i]
      }
   }

   if(myUser) {
      res.json(myUser)
   } else {
      res.json({ error: 'Usuário não encontrado' })
   }

   
   /*for(let i in Users) {
      if(Users[i].id.toString() === id) {
         res.json(Users[i])
         return
      }
   }

   res.json({ error: 'Usuário não encontrado' })*/

   const user = await prisma.user.findUnique({
      where: {
         id: parseInt(id as string)
      }
   })

   if(user) {
      res.json({ status: true, user })
   }

   res.json({ error: 'Usuário não encontrado.' })
}

const handlePut: NextApiHandler = async(req, res) => {
   const { name, active } = req.body
   const { id } = req.query

   let data: {
      name?: string
      active?: boolean
   } = {}

   if(name) {
      data.name = name
   }

   if(active) {
      switch(active) {
         case 'true':
         case '1':
            data.active = true
            break
         case 'false':
         case '0':
            data.active = false
            break
      }
   }

   const updateUser = await prisma.user.update({
      where: {
         id: parseInt(id as string)
      },
      data
   })

   if(updateUser) {
      res.json({ status: true, user: updateUser })
      return
   }

   res.json({ error: 'Não foi possível alterar os dados deste usuário.' })
}

const handleDelete: NextApiHandler = async(req, res) => {
   const { id } = req.query

   const deleteUser = await prisma.user.delete({
      where: {
         id: parseInt(id as string)
      }
   }).catch(() => {
      res.json({ error: 'Usuário não encontrado.' })
   })

   if(deleteUser) {
      res.json({ status: true })
   }
}

const handler: NextApiHandler = async(req, res) => {
   switch(req.method){
      case 'GET':
         handlerGet(req, res)
         break
      case 'PUT':
         handlePut(req, res)
         break
      case 'DELETE':
         handleDelete(req, res)
         break
   }
}

export default handler