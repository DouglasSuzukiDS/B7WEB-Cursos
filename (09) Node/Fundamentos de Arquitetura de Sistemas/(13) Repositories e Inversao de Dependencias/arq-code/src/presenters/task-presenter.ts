import { Task } from "../entities/task"

type CreateTaskPresenterType = {
   errorMessage: string,
   data: {
      task: Task
   }
}
export const createTaskPresenter = ({ errorMessage, data }: CreateTaskPresenterType) => {
   return {
      error: errorMessage ?? null,
      data
   }
}