import { Request, Response } from "express";
import { MealModel } from "../models";
import MealPlan from "../mock-data/MealPlan";

export const getMealPlanList = async (req: Request, res: Response) => {
  const mealPlan = await MealModel.find();
  if (!mealPlan) {
    throw new Error("Meal Plan not found");
  }
  res.status(200).json(mealPlan);
};

export const getMealPlan = async (req: Request, res: Response) => {
  const mealPlanId = req.params.id;
  const mealPlan = await MealModel.findById(mealPlanId);
  if (!mealPlan) {
    throw new Error("Meal Plan not found");
  }
  res.status(200).json(mealPlan);
};

export const createMealPlan = async (req: Request, res: Response) => {
  const { name, goal, activityLevel, description, weeklySchedule } = req.body;
  const newMealPlan = new MealModel({
    name,
    goal,
    activityLevel,
    description,
    weeklySchedule,
  });
  await newMealPlan.save();
  res.status(201).json(newMealPlan);
};

export const initializeMealPlan = async (req: Request, res: Response) => {
  await MealModel.insertMany(MealPlan);
  res.status(201).json({ message: "Meal PLans initialized" });
};