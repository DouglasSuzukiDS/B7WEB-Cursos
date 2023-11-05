import { Users } from "@/utils/users";
import { NextApiHandler } from "next";

// Getting all users
const handlerGet: NextApiHandler = (req, res) => {
   // http://localhost:3000/api/users?limit=2
   const { limit } = req.query

   // http://localhost:3000/api/users?search=nick&age=20
   const { search, age } = req.query

   res.json(Users)
}

// Insertinf new user
const handlerPost: NextApiHandler = (req, res) => {
   const { name, age } = req.body

   res.json({ status: true, user: { name, age } })
}

const handler: NextApiHandler = (req, res) => {
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