import { WorkoutModel } from "../models/";
import { ExerciseRepository } from ".";

type ExerciseSlugMap = { [slug: string]: any };

export const populateExercise = async (workout: any) => {
  const slugs = [
    ...new Set(
      workout.weeklySchedule.flatMap((day: any) =>
        day.exercises.map((ex: any) => ex.exerciseSlug)
      )
    ),
  ];

  const exercises = await ExerciseRepository.getAllExercises({
    slug: { $in: slugs },
  });

  const exerciseMap: ExerciseSlugMap = Object.fromEntries(
    exercises.map((ex: any) => [ex.slug, ex])
  );

  const updatedSchedule = workout.weeklySchedule.map((day: any) => ({
    ...day,
    exercises: day.exercises.map((ex: any) => {
      const populate = { ...ex, exercise: exerciseMap[ex.exerciseSlug] || null };
      delete populate.exerciseSlug;
      return populate;
    }),
  }));

  return {
    ...workout,
    weeklySchedule: updatedSchedule,
  };
};

export const getAllWorkouts = async () => {
  const workouts = await WorkoutModel.find().lean();
  return await Promise.all(workouts.map(populateExercise));
};

export const getWorkoutBySlug = async (slug: string) => {
  const workout = await WorkoutModel.findOne({ slug }).lean();
  if (!workout) throw new Error("Workout not found");
  return await populateExercise(workout);
};

export const getWorkoutById = async (id: string) => {
  const workout = await WorkoutModel.findById(id).lean();
  if (!workout) throw new Error("Workout not found");
  return await populateExercise(workout);
};
