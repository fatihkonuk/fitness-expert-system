import { Router } from 'express';
import WorkoutRoutes from './workout.routes';
import RecommendRoutes from './recommend.routes';
import ExerciseRoutes from './exercise.routes';
import MealPlanRoutes from './meal.routes';

const router = Router();

router.use('/workout', WorkoutRoutes);
router.use('/recommend', RecommendRoutes);
router.use('/exercise', ExerciseRoutes);
router.use('/meal', MealPlanRoutes);

export default router;