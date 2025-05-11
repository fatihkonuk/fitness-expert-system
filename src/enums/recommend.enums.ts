export const BMIEnum = {
  UNDERWEIGHT: {
    text: "Zayıf",
    type: "underweight",
    min: 0,
    max: 18.5,
  },
  NORMAL_WEIGHT: {
    text: "Normal",
    type: "normal_weight",
    min: 18.5,
    max: 24.9,
  },
  OVERWEIGHT: {
    text: "Kilolu",
    type: "overweight",
    min: 25,
    max: 29.9,
  },
  OBESE: {
    text: "Obez",
    type: "obesity_class_1",
    min: 30,
    max: 34.9,
  },
  MORBID: {
    text: "Morbid obez",
    type: "obesity_class_2",
    min: 35,
    max: 39.9,
  },
} as const;

export const ACTIVITY_LEVEL_ENUM = {
  SEDENTARY: {
    text: "Hareketsiz",
    type: "sedentary",
    min: 0,
    max: 1.2,
  },
  LIGHTLY_ACTIVE: {
    text: "Hafif aktif",
    type: "lightly_active",
    min: 1.2,
    max: 1.375,
  },
  MODERATELY_ACTIVE: {
    text: "Orta aktif",
    type: "moderately_active",
    min: 1.375,
    max: 1.55,
  },
  VERY_ACTIVE: {
    text: "Çok aktif",
    type: "very_active",
    min: 1.55,
    max: 1.725,
  },
} as const;


