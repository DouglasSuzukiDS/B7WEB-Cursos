import z from "zod";

export const createUserSchema = z.object({
   name: z.string().min(2, "O nome é obrigatório").max(255),
   email: z.email("Formato de e-mail inválido"),
   password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres").max(128),
})

export const listUsersSchema = z.object({
   offset: z.coerce.number().int().min(0).optional().default(0),
   limit: z.coerce.number().int().min(1).optional().default(10),
})

export const userIdSchema = z.object({
   id: z.uuid('Formato de ID de usuário inválido.')
})

export const updateUserSchema = z.object({
   name: z.string().min(2, "O nome é obrigatório").max(255).optional(),
   email: z.email("Formato de e-mail inválido").optional(),
   password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres").max(128).optional(),
   isAdmin: z.boolean().optional(),
   avatarUrl: z.string().nullable().optional(),
})