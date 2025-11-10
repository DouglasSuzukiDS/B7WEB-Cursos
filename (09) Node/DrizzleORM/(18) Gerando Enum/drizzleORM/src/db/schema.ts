import { date, integer, pgEnum, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

const timestamps = {
   createdAt: date().defaultNow().notNull(),
   updatedAt: date(),
}

export const rolesEnum = pgEnum('roles', ['user', 'admin'])

export const usersTable = pgTable('users', {
   id: integer().primaryKey().generatedAlwaysAsIdentity(),
   role: rolesEnum().default('user'),
   name: varchar({ length: 255 }).notNull(),
   age: integer().notNull(),
   email: varchar({ length: 255 }).notNull().unique(),
   obs: varchar({ length: 255 }),
   balance: integer().notNull().default(100),
   //...timestamps,
})

export const petsTable = pgTable('pets', {
   id: integer().primaryKey().generatedAlwaysAsIdentity(),
   name: varchar({ length: 100 }).notNull(),
   ownerId: integer().notNull().references(() => usersTable.id),
   // ...timestamps,
})