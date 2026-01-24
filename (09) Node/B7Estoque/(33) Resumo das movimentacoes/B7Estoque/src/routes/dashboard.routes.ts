import { Router } from "express";
import * as dashboardController from "../controllers/dashboard.controller"

const router = Router()

// GET /dashboard/inventory-value - Get total inventory value
router.get('/inventory-value', dashboardController.getInventoryValue)

// GET /dashboard/moves-summary - Get total/count of in and out moves (in given period)
router.get('/moves-summary', dashboardController.getMovesSummary)

export default router