import { createTask } from "../entities/task";
import { ITaskRepository, TaskRepositoryPostgreSQL } from "../ports/task-repository";

const repositoryInserssion: ITaskRepository = TaskRepositoryPostgreSQL

export const registerTask = async (title: string, repository: ITaskRepository) => {
   const taskItem = createTask(title)

   await repository.save(taskItem)

   return taskItem
}  