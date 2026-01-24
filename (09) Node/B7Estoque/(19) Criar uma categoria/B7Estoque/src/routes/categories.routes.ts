import { Router } from "express";
import * as categoryController from "../controllers/categorie.controller";

const router = Router()

router.post('/', categoryController.createCategory)

export default router