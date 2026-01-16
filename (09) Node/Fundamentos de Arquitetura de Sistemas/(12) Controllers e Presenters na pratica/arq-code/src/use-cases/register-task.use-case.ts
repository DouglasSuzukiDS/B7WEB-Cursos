import { createTask } from "../entities/task";
import { ITaskRepository, TaskRepository } from "../ports/task-repository";

export const registerTask = async (title: string) => {
   const taskItem = createTask(title)

   await TaskRepository.save(taskItem)

   return taskItem
}  