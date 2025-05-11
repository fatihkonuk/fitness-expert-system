export type Rule = {
  conditions: Condition[];
  recommendations: {
    workoutProgramId: string;
    mealPlanId: string;
    explanation: string;
  };
};
export type Condition = {
  field: ConditionField; // Örn: "goal"
  operator: ConditionOperator; // Örn: "=="
  value: string | number | boolean; // "weight_loss", 5, true
};
export type ConditionOperator = "==" | "!=" | "<" | "<=" | ">" | ">=";
export type ConditionField =
  | "goal"
  | "bodyMassIndex"
  | "trainingHistory"
  | "activityLevel"
  | "frequencyOfTraining"
  | "dietType"
  | "supplements";

export const conditions: Array<{ field: ConditionField; value: any[] }> = [
  {
    field: "goal",
    value: [
      "weight_loss",
      "muscle_gain",
      "maintenance",
    ],
  },
  {
    field: "activityLevel",
    value: ["sedentary", "lightly_active", "moderately_active", "very_active"],
  },
  {
    field: "bodyMassIndex",
    value: [
      "underweight",
      "normal_weight",
      "overweight",
      "obesity_class_1",
      "obesity_class_2",
      "obesity_class_3",
    ],
  },
  {
    field: "trainingHistory",
    value: ["beginner", "intermediate", "advanced"],
  },
  {
    field: "frequencyOfTraining",
    value: ["low", "medium", "high"],
  },
  {
    field: "dietType",
    value: ["normal", "vegetarian", "vegan", "ketogenic"],
  },
  {
    field: "supplements",
    value: [true, false],
  },
];
