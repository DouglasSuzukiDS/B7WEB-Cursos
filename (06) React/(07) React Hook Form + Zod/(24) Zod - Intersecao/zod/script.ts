import { z } from "zod";

const person = z.object({
  name: z.string(),
  age: z.number()
})

const employee = z.object({
  role: z.string()
})

// Forma 01
// const employedPerson = z.intersection(person, employee)

// Forma 02
const employedPerson = person.and(employee)

const result = employedPerson.parse({
  name: 'Nick',
  age: 30,
  role: 'Developer'
})

console.log(result)