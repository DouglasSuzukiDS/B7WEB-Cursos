import { Router } from "express";
import * as TaskController from "../controllers/task-controller"

export const router = Router()

router.get('/ping', (req, res) => {
   res.json({ pong: true })
})

router.post('/tasks', TaskController.createTask)