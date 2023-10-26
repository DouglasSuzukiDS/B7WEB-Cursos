import { z } from "zod";

const pattern = z.object({
  name: z.string(),
  // age: z.number().default(18),
  age: z.number().default(() => Math.floor(Math.random() * 18)),
  email: z.string().email()
})


const result = pattern.parse({
  name: 'Nick',
  email: 'email@email.com'
})

console.log(result)