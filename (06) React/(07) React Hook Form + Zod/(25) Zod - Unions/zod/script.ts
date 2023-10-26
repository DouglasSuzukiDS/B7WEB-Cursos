import { z } from "zod";

const pattern = z.object({
  // UNION => Condicional para pegar ou um, ou outro
  // Forma 01
  // age: z.union([ z.string(), z.number() ])

  // Forma 02
  age: z.string().or(z.number())
})

const result = pattern.parse({
  age: '90'
})

console.log(result)