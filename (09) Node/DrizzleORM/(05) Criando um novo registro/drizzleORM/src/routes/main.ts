import { Router } from "express";
import { usersTable } from "../db/schema.js";
import { db } from "../libs/drizzle.js";

const router = Router()

router.get('/ping', (req, res) => {
   res.json({ pong: true })
})

router.post('/user', async (req, res) => {
   type UserInsert = typeof usersTable.$inferInsert

   const newUser: UserInsert = {
      name: 'Nick',
      email: 'nick@email.com',
      age: 25
   }

   await db.insert(usersTable).values(newUser)

   res.status(201).json({ error: null })
})

export default router