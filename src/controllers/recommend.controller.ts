import { Request, Response } from "express";
import {
  matchConditions,
  calculateBasalMetabolicRate,
  calculateBodyMassIndex,
  calculateTotalDailyEnergyExpenditure,
  getBmiCategory,
} from "../helpers/recommend.helpers";
import { RuleModel, MealModel, WorkoutModel } from "../models";
import RuleData from "../mock-data/Rule";
import { WorkoutRepository, MealPlanRepository } from "../repositories";

export const getRecommend = async (req: Request, res: Response) => {
  const userInput = req.body; // Örn: { goal: "weight_loss", activityLevel: "medium" }

  if (!userInput) {
    throw new Error("Required user input is missing");
  }

  const { weight, height, age, gender, activityLevel } = userInput;

  const bmr = calculateBasalMetabolicRate(weight, height, age, gender);
  const tdee = calculateTotalDailyEnergyExpenditure(bmr, activityLevel);
  const bmi = calculateBodyMassIndex(weight, height);
  const bmiCategory = getBmiCategory(bmi);

  const allRules = await RuleModel.find();

  const userConditions = {
    goal: userInput.goal,
    activityLevel: activityLevel,
    bodyMassIndex: bmiCategory.type,
    trainingHistory: userInput.trainingHistory,
    frequencyOfTraining: userInput.frequencyOfTraining,
    dietType: userInput.dietType,
    supplements: userInput.supplements,
  };

  console.log("User Conditions: ", userConditions);
  

  // Eşleşen kuralı bul
  const matchedRule = allRules.find((rule) =>
    matchConditions(rule.conditions, userConditions)
  );

  if (!matchedRule) {
    throw new Error("No matching rule found");
  }
  console.log("Matched Rule: ", matchedRule);
  // Eğer önerilerde mealPlanSlug varsa mealPlanId'yi mealPlanSlug ile eşleştir
  const mealPlan = await MealPlanRepository.getMealPlanBySlug(
    matchedRule.recommendations.mealPlanSlug as string
  );

  const workoutProgram = await WorkoutRepository.getWorkoutBySlug(
    matchedRule.recommendations.workoutProgramSlug as string
  );

  res.status(200).json({
    workoutProgram: workoutProgram,
    mealPlan: mealPlan,
    explanation: matchedRule.recommendations.explanation,
    bmr,
    tdee,
    bmi,
    bmiCategory: bmiCategory.text,
  });
};

export const createRecommend = async (req: Request, res: Response) => {
  const { conditions, recommendations } = req.body;

  const newRule = new RuleModel({
    conditions,
    recommendations,
  });

  await newRule.save();

  res.status(201).json(newRule);
};

export const initializeReccommend = async (req: Request, res: Response) => {
  await RuleModel.insertMany(RuleData);
  res.status(201).json({ message: "Rules initialized" });
};
