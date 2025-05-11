import { Request, Response } from "express";
import { WorkoutModel } from "../models";
import WorkoutData from "../mock-data/Workouts";
import { WorkoutRepository } from "../repositories";

export const getWorkoutList = async (req: Request, res: Response) => {
  const workouts = await WorkoutRepository.getAllWorkouts();

  if (!workouts) {
    throw new Error("Workouts not found");
  }
  res.status(200).json(workouts);
};

export const getWorkout = async (req: Request, res: Response) => {
  const workoutId = req.params.id;
  const workout = await WorkoutRepository.getWorkoutById(workoutId);

  if (!workout) {
    throw new Error("Workout not found");
  }
  
  res.status(200).json(workout);
};

export const createWorkout = async (req: Request, res: Response) => {
  const { name, goal, activityLevel, description, weeklySchedule } = req.body;
  const newWorkout = new WorkoutModel({
    name,
    goal,
    activityLevel,
    description,
    weeklySchedule,
  });
  await newWorkout.save();
  res.status(201).json(newWorkout);
};

export const initializeWorkout = async (req: Request, res: Response) => {
  await WorkoutModel.insertMany(WorkoutData);
  res.status(201).json({ message: "Workouts initialized" });
};
