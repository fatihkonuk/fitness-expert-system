import { MealModel } from "../models/";

export const getAllMealPlans = async () => {
  return await MealModel.find().lean();
};

export const getMealPlanBySlug = async (slug: string) => {
  const mealPlan = await MealModel.findOne({ slug }).lean();
  if (!mealPlan) {
    throw new Error("Meal Plan not found");
  }
  return mealPlan;
};

export const getMealPlanById = async (id: string) => {
  const mealPlan = await MealModel.findById(id).lean();
  if (!mealPlan) {
    throw new Error("Meal Plan not found");
  }
  return mealPlan;
};
