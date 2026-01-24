import z from "zod";

export const createCategorySchema = z.object({
   name: z.string().min(1, 'O nome é obrigatório.').max(255),
})