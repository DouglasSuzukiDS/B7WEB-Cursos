import { Task } from "../entities/task"

export type ITaskRepository = {
   save(task: Task): Promise<void>
}