import { RequestHandler } from "express";
import { registerTask } from "../use-cases/register-task.use-case";
import { createTaskPresenter } from "../presenters/task-presenter";

export const createTask: RequestHandler = async (req, res) => {
   // 1) Receber os dados
   const { title } = req.body

   // 2) Mandar os dados para a application (use case)
   const newTask = await registerTask(title)

   // 3) Retornar o resultado (usando presenters)
   res.status(201).json(createTaskPresenter({
      errorMessage: '',
      data: {
         task: newTask
      }
   }))
}