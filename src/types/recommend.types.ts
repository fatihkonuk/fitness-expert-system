import { ACTIVITY_LEVEL_ENUM, BMIEnum } from "../enums/recommend.enums";

export type BMIEnumType = (typeof BMIEnum)[keyof typeof BMIEnum];

export type ACTIVITY_LEVEL_ENUM_TYPE =
  (typeof ACTIVITY_LEVEL_ENUM)[keyof typeof ACTIVITY_LEVEL_ENUM];

export type ActivityLevelType =
  | "sedentary"
  | "lightly_active"
  | "moderately_active"
  | "very_active";
