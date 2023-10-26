import { string, z } from "zod";

const pattern = z.object({
  // name: string().transform(val => val.length),
  name: string().transform(val => val.toLocaleUpperCase()),
  email: z.string().email().transform(val => val.split('@')[1])
})


const result = pattern.parse({
  name: 'Nick',
  email: 'email@email.com'
})

console.log(result)