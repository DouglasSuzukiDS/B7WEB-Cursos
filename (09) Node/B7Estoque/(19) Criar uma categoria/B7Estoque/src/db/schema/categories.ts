import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const categories = pgTable('categories', {
   id: uuid('id').primaryKey().defaultRandom(),
   name: text('name').notNull(),
   deletedAt: timestamp('deleted_at'),
   createdAt: timestamp('created_at').defaultNow().notNull(),
   updatedAt: timestamp('updated_at').defaultNow().notNull()
})

export type Category = typeof categories.$inferSelect
export type NewCategory = typeof categories.$inferInsert