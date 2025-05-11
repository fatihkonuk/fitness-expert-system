export default [
  {
    conditions: [
      {
        field: "goal",
        operator: "==",
        value: "weight_loss",
      },
      {
        field: "activityLevel",
        operator: "==",
        value: "lightly_active",
      },
    ],
    recommendations: {
      workoutProgramSlug: "baslangic_vucut_gelistirme",
      mealPlanSlug: "weight_loss_balanced",
      explanation:
        "Yağ yakımı hedefiniz ve orta seviye aktivite düzeyinize uygun olarak düşük karbonhidrat diyeti ve HIIT ağırlıklı program önerildi.",
    },
  },
  {
    conditions: [
      {
        field: "goal",
        operator: "==",
        value: "muscle_gain",
      },
      {
        field: "activityLevel",
        operator: "==",
        value: "lightly_active",
      },
    ],
    recommendations: {
      workoutProgramSlug: "tam_vucut_fonksiyonel_antrenman",
      mealPlanSlug: "muscle_gain_high_protein",
      explanation:
        "Kas kazanımı hedefiniz ve orta seviye aktivite düzeyinize uygun olarak yüksek protein diyeti ve ağırlık antrenmanı önerildi.",
    },
  },
  {
    conditions: [
      {
        field: "goal",
        operator: "==",
        value: "maintenance",
      },
      {
        field: "activityLevel",
        operator: "==",
        value: "very_active",
      },
    ],
    recommendations: {
      workoutProgramSlug: "fonksiyonel_kuvvet",
      mealPlanSlug: "athlete_nutrition",
      explanation:
        "Form koruma hedefiniz ve yüksek seviye aktivite düzeyinize uygun olarak dengeli bir diyet ve karma antrenman programı önerildi.",
    },
  },
];
