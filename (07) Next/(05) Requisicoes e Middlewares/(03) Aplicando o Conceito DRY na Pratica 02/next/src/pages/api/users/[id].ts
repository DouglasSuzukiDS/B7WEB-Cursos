import { Users } from "@/utils/users";
import { NextApiHandler } from "next";
import prisma from '../../../libs/prisma'
import api from '../../../libs/api'

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

   const user = await api.getUser(parseInt(id as string))

   if(user) {
      res.json({ status: true, user })
      return 
   }

   res.json({ error: 'Usuário não encontrado.' })
}

const handlePut: NextApiHandler = async(req, res) => {
   const { name, active } = req.body
   const { id } = req.query

   const updateUser = await api.updateUser(
      parseInt(id as string), name, active
   )

   if(updateUser) {
      res.json({ status: true, user: updateUser })
      return
   }

   res.json({ error: 'Não foi possível alterar os dados deste usuário.' })
}

const handleDelete: NextApiHandler = async(req, res) => {
   const { id } = req.query

   const deleteUser = await api.deleteUser(parseInt(id as string))
      .catch(() => {
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