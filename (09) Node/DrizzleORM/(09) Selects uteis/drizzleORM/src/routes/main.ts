import { Router } from "express";
import { usersTable } from "../db/schema.js";
import { db } from "../libs/drizzle.js";
import { and, between, eq, like, ne } from "drizzle-orm";

const router = Router()

router.get('/ping', (req, res) => {
   res.json({ pong: true })
})

router.get('/user', async (req, res) => {
   const filters = between(usersTable.age, 18, 50)
   const total = await db.$count(usersTable, filters)

   const users = await db.select()
      .from(usersTable)
      .where(
         /*and(
            eq(usersTable.email, 'nick@email.com'),
            eq(usersTable.age, 25),
         )*/
         // like(usersTable.email, "%.com")
         // between(usersTable.age, 18, 50)
         filters
      )
   // eq => equal
   // ne => not equal
   // gt => greater than
   // gte => greater than or equal
   // lt => less than
   // lte => less than or equal
   // and => logical AND
   // or => logical OR
   // like => SQL LIKE operator
   // between => SQL BETWEEN operator

   res.status(200).json({ users, total })
})

router.post('/user', async (req, res) => {
   type UserInsert = typeof usersTable.$inferInsert

   const newUser: UserInsert = {
      name: 'Tonhao',
      email: 'tonhao@email.com',
      age: 20
   }

   const data = await db.insert(usersTable).values(newUser).returning({ id: usersTable.id })
   // returning() => retorna os dados inseridos

   if (data.length > 0) {
      const insertedId = data[0]?.id
      res.status(201).json({ error: null, data, id: insertedId })
   } else {
      res.status(400).json({ error: 'Deu problema' })
   }

})

router.put('/user', async (req, res) => {
   await db.update(usersTable)
      .set({
         age: 26
      })
      .where(eq(usersTable.email, 'nick@email.com'))

   res.status(200).json({ error: null })
})

router.delete('/user', async (req, res) => {
   await db.delete(usersTable)
      .where(eq(usersTable.id, 1))

   res.status(200).json({ error: null })
})

export default router