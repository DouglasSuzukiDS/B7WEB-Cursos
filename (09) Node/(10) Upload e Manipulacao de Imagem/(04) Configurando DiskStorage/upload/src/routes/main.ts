import { Router } from "express"
import * as pingController from '../controller/ping'
import * as uploadController from '../controller/upload'
import { upload } from "../libs/multer"

export const mainRouter = Router()

mainRouter.get("/ping", pingController.ping)

mainRouter.post('/upload', upload.single('arquivo'), uploadController.upload)