import { z } from "zod";

const pattern = z.object({
  name: z.string(),
  // age: z.number().default(18),
  age: z.number(),
  // magics: z.string().array()
  magics: z.array(z.string())
})


const result = pattern.parse({
  name: 'Nick',
  age: 30,
  magics: ['Flexa', 'Fogo']
})

console.log(result)