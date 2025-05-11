import { ExerciseModel } from "../models";

export const getAllExercises = async (filter?: any) => {
  const exercises = await ExerciseModel.find(filter).lean();
  return exercises;
};

export const getExerciseBySlug = async (slug: string) => {
  const exercise = await ExerciseModel.findOne({ slug }).lean();
  return exercise;
};