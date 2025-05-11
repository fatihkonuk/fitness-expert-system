import { Schema, model } from "mongoose";

const MealSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, unique: true },
    description: { type: String },
    calories: { type: Number },
    macros: {
      protein: { type: Number },
      carbs: { type: Number },
      fat: { type: Number },
    },
    meals: [
      {
        _id: false,
        timeOfDay: {
          type: String,
          enum: ["Kahvaltı", "Öğle Yemeği", "Akşam Yemeği", "Ara Öğün"],
          required: true,
        },
        name: { type: String },
        items: [String],
        notes: { type: String },
      },
    ],
    supplements: [
      {
        _id: false,
        name: { type: String },
        usageTime: {
          type: String,
          enum: [
            "pre_workout",
            "post_workout",
            "morning",
            "night",
            "with_meal",
          ],
        },
        reason: { type: String }, // örn: "Protein ihtiyacını desteklemek"
      },
    ],
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

const MealModel = model("MealPlan", MealSchema);

export default MealModel;
