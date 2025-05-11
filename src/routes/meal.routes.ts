import { Router } from "express";
import { MealPlanController } from "../controllers";

const router = Router();

router.get("/", MealPlanController.getMealPlanList);
router.get("/:id", MealPlanController.getMealPlan);
router.post("/", MealPlanController.createMealPlan);
router.post("/initialize", MealPlanController.initializeMealPlan);

export default router;
