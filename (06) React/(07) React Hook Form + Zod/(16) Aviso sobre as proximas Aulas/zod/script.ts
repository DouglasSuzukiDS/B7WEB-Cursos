import { z } from "zod";

const User = z.object({
   name: z.string()
})

const result = User.parse({
   name: 'Nick'
})
// Para rodar n oTemrinal: ts-node script.ts

console.log(result)