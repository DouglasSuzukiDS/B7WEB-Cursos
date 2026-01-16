import { v4 } from "uuid"

export type Task = {
   id: string
   title: string
   isCompleted: boolean
}

export const createTask = (title: string): Task => {
   if (title.length < 2) {
      throw new Error('Title must be greater than 2 characters.')
   }

   return Object.freeze({
      id: v4(),
      title,
      isCompleted: false
   })
}