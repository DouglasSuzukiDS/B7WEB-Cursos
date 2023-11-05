import { Users } from "@/utils/users";
import { NextApiHandler } from "next";

// Getting all users
const handlerGet: NextApiHandler = (req, res) => {
   res.json(Users)
}

// Insertinf new user
const handlerPost: NextApiHandler = (req, res) => {
   res.json({ status: true })
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