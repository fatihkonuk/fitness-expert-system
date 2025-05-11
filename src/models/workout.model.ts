import { Schema, model } from "mongoose";

const WorkoutSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    slug: { type: String, unique: true },
    weeklySchedule: [
      {
        _id: false,
        day: {
          type: String,
          enum: [
            "Pazartesi",
            "Salı",
            "Çarşamba",
            "Perşembe",
            "Cuma",
            "Cumartesi",
            "Pazar",
          ],
        },
        exercises: [
          {
            _id: false,
            exerciseSlug: { type: String, required: true }, // Örn: "squat"
            sets: { type: Number, default: 3 },
            reps: { type: Number, default: 12 }, // Örn: 12 tekrar
            duration: { type: Number }, // Örn: HIIT için 20 (dakika)
            rest: { type: Number }, // saniye cinsinden, örn: 60
            notes: { type: String }, // opsiyonel açıklama
          },
        ],
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

const WorkoutModel = model("Workout", WorkoutSchema);

export default WorkoutModel;
