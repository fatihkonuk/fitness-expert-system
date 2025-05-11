import { Request, Response } from "express";
import { ExerciseModel } from "../models";
import ExerciseData from "../mock-data/Exercise";

export const getExerciseList = async (req: Request, res: Response) => {
  const exercise = await ExerciseModel.find();
  if (!exercise) {
    throw new Error("Exercise not found");
  }
  res.status(200).json(exercise);
};

export const getExercise = async (req: Request, res: Response) => {
  const exerciseId = req.params.id;
  const exercise = await ExerciseModel.findById(exerciseId);
  if (!exercise) {
    throw new Error("Exercise not found");
  }
  res.status(200).json(exercise);
};

export const createExercise = async (req: Request, res: Response) => {
  const { name, type, equipment, description, imageUrl, videoUrl } = req.body;
  const newExercise = new ExerciseModel({
    name,
    type,
    equipment,
    description,
    imageUrl,
    videoUrl,
  });
  await newExercise.save();
  res.status(201).json(newExercise);
};

export const initializeExercises = async (req: Request, res: Response) => {
  await ExerciseModel.insertMany(ExerciseData);
  res.status(201).json({ message: "Exercises initialized" });
};
