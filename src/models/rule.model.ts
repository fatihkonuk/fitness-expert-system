import { Schema, model } from "mongoose";
import { Condition } from "../types/rule.types";

const RuleSchema = new Schema(
  {
    conditions: {
      type: Array<Condition>(),
      required: true,
    },
    recommendations: {
      workoutProgramSlug: { type: String },
      mealPlanSlug: { type: String },
      explanation: { type: String },
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
    toObject: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

const RuleModel = model("Rule", RuleSchema);

export default RuleModel;
