import { z } from "zod";

const pattern = z.object({
  age: z.number()
})

const promisePatter = z.promise(pattern)

const apiResponse = Promise.resolve({
  age: 90
})

const result = promisePatter.parse(apiResponse)

console.log(result)