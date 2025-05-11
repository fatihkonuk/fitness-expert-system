import { Router } from "express";
import { WorkoutController } from "../controllers";

const router = Router();

router.get("/", WorkoutController.getWorkoutList);
router.get("/:id", WorkoutController.getWorkout);
router.post("/", WorkoutController.createWorkout);
router.post("/initialize", WorkoutController.initializeWorkout);

export default router;
