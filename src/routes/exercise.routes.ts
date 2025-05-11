import { Router } from "express";
import { ExerciseController } from "../controllers";

const router = Router();

router.get("/", ExerciseController.getExerciseList);
router.get("/:id", ExerciseController.getExercise);
router.post("/", ExerciseController.createExercise);
router.post("/initialize", ExerciseController.initializeExercises);

export default router;