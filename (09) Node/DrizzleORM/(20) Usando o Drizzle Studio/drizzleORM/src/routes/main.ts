import { Router } from "express";
import { petsTable, postsTable, usersTable } from "../db/schema.js";
import { db } from "../libs/drizzle.js";
import { and, between, desc, eq, like, ne, sql } from "drizzle-orm";

const router = Router()

router.get('/ping', (req, res) => {
   res.json({ pong: true })
})

const transfer = async (val: number, userFrom: number, userTo: number) => {
   await db.transaction(async (tx) => {
      const [account] = await tx
         .select({ balance: usersTable.balance })
         .from(usersTable)
         .where(eq(usersTable.id, userFrom))

      if (account && account.balance && account.balance <= val) {
         tx.rollback()
      }

      await tx
         .update(usersTable)
         .set({ balance: sql`${usersTable.balance} - ${val}` })
         .where(eq(usersTable.id, userFrom))

      await tx
         .update(usersTable)
         .set({ balance: sql`${usersTable.balance} + ${val}` })
         .where(eq(usersTable.id, userTo))
   })
}

router.post('/deposit', async (req, res) => {
   await transfer(35, 5, 6)

   res.json({ error: null })
})

router.post('/post', async (req, res) => {
   await db.insert(postsTable).values({
      title: 'Post Teste',
      body: 'Conteúdo do post teste',
      ownerId: 5
   })
   res.status(201).json({ error: null })
})

router.get('/user-old', async (req, res) => {
   const filters = between(usersTable.age, 18, 50)
   const total = await db.$count(usersTable, filters)
   const perPage = 2
   const currentPage = 1

   const users = await db
      .select({
         id: usersTable.id,
         name: sql<string>`lower(${usersTable.name})`,
         email: usersTable.email,
         age: usersTable.age
      })
      .from(usersTable)
      .orderBy(desc(usersTable.name), desc(usersTable.id))
      .limit(perPage)
      .offset((currentPage - 1) * perPage) // Pula tantos itens
   /*.where(
      // and(
      //    eq(usersTable.email, 'nick@email.com'),
      //    eq(usersTable.age, 25),
      // )
      // like(usersTable.email, "%.com")
      // between(usersTable.age, 18, 50)
      //filters
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
// between => SQL BETWEEN operator*/

   res.status(200).json({ users, total })
})

router.get('/user', async (req, res) => {
   const users = await db
      /*.select({
         // id: usersTable.id,
         // name: usersTable.name,
         // nameLower: sql`lower(${usersTable.name})`,
         // total: sql<number>`count(*)`
      })*/
      //.where(sql`${usersTable.id} = 5`)
      .select()
      .from(usersTable)

   res.status(200).json({ users })
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