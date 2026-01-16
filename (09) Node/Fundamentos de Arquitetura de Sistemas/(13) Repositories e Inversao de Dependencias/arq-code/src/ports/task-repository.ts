import { Task } from "../entities/task"

export type ITaskRepository = {
   save(task: Task): Promise<void>
}

export const TaskRepositoryPostgreSQL: ITaskRepository = {
   async save(task: Task): Promise<void> { }
}

export const TaskRepositoryMongoDB: ITaskRepository = {
   async save(task: Task): Promise<void> { }
}