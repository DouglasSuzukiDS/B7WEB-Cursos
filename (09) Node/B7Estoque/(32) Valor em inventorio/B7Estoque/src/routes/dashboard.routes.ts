import { Router } from "express";
import * as dashboardController from "../controllers/dashboard.controller"

const router = Router()

// GET /dashboard/inventory-value - Get total inventory value
router.get('/inventory-value', dashboardController.getInventoryValue)

export default router