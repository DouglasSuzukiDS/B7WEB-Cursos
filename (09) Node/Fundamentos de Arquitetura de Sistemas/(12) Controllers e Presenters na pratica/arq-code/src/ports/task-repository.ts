import { Task } from "../entities/task"

export type ITaskRepository = {
   save(task: Task): Promise<void>
}

export const TaskRepository: ITaskRepository = {
   async save(task: Task): Promise<void> { }
}