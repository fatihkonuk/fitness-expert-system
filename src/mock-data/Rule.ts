export default [
  // 1. Kilo Verme - Sedanter - Başlangıç Seviyesi
  {
    conditions: [
      { field: "goal", operator: "==", value: "weight_loss" },
      { field: "activityLevel", operator: "==", value: "sedentary" },
      { field: "dietType", operator: "==", value: "normal" },
      { field: "supplements", operator: "==", value: false },
      { field: "trainingHistory", operator: "==", value: "beginner" },
      { field: "frequencyOfTraining", operator: "==", value: "low" },
      { field: "bodyMassIndex", operator: "==", value: "overweight" },
    ],
    recommendations: {
      workoutProgramSlug: "evde_vucut_agirligi_antrenmani",
      mealPlanSlug: "weight_loss_balanced",
      explanation:
        "Yeni başlayan, hareketsiz yaşam tarzına sahip bireyler için temel ev egzersizleri ve dengeli kilo verme programı",
    },
  },
  

  // 2. Kas Kazanımı - Orta Seviye - Aktif
  {
    conditions: [
      { field: "goal", operator: "==", value: "muscle_gain" },
      { field: "bodyMassIndex", operator: "==", value: "normal_weight" },
      { field: "trainingHistory", operator: "==", value: "intermediate" },
      { field: "activityLevel", operator: "==", value: "moderately_active" },
      { field: "frequencyOfTraining", operator: "==", value: "medium" },
      { field: "dietType", operator: "==", value: "normal" },
      { field: "supplements", operator: "==", value: true },
    ],
    recommendations: {
      workoutProgramSlug: "haftalik_tam_vucut",
      mealPlanSlug: "muscle_gain_high_protein",
      explanation:
        "Orta seviye sporcular için tam vücut geliştirme programı ve yüksek proteinli beslenme planı",
    },
  },

  // 3. Vegan Beslenen - Kilo Kontrolü
  {
    conditions: [
      { field: "goal", operator: "==", value: "maintenance" },
      { field: "bodyMassIndex", operator: "==", value: "normal_weight" },
      { field: "trainingHistory", operator: "==", value: "beginner" },
      { field: "activityLevel", operator: "==", value: "lightly_active" },
      { field: "frequencyOfTraining", operator: "==", value: "low" },
      { field: "dietType", operator: "==", value: "vegan" },
      { field: "supplements", operator: "==", value: true },
    ],
    recommendations: {
      workoutProgramSlug: "sabah_yoga_rutini",
      mealPlanSlug: "vegan_weight_control",
      explanation:
        "Vegan beslenen bireyler için kilo koruma programı ve yüksek lifli beslenme planı",
    },
  },

  // 4. İleri Seviye Vücut Geliştirme
  {
    conditions: [
      { field: "goal", operator: "==", value: "muscle_gain" },
      { field: "bodyMassIndex", operator: "==", value: "normal_weight" },
      { field: "trainingHistory", operator: "==", value: "advanced" },
      { field: "activityLevel", operator: "==", value: "very_active" },
      { field: "frequencyOfTraining", operator: "==", value: "high" },
      { field: "dietType", operator: "==", value: "normal" },
      { field: "supplements", operator: "==", value: true },
    ],
    recommendations: {
      workoutProgramSlug: "sporcu_performans",
      mealPlanSlug: "athlete_nutrition",
      explanation:
        "İleri seviye vücut geliştiriciler için özel antrenman programı ve sporcu beslenme planı",
    },
  },

  // 5. Düşük Karbonhidrat Diyeti
  {
    conditions: [
      { field: "goal", operator: "==", value: "weight_loss" },
      { field: "bodyMassIndex", operator: "==", value: "obesity_class_1" },
      { field: "trainingHistory", operator: "==", value: "intermediate" },
      { field: "activityLevel", operator: "==", value: "lightly_active" },
      { field: "frequencyOfTraining", operator: "==", value: "medium" },
      { field: "dietType", operator: "==", value: "normal" },
      { field: "supplements", operator: "==", value: false },
    ],
    recommendations: {
      workoutProgramSlug: "kardiyo_agirlikli_fitness",
      mealPlanSlug: "low_carb_diet",
      explanation:
        "Obezite sınıf 1 bireyler için kardiyo ağırlıklı antrenman ve düşük karbonhidrat diyeti",
    },
  },

  // 6. Yaşlılar İçin Denge Programı
  {
    conditions: [
      { field: "goal", operator: "==", value: "maintenance" },
      { field: "bodyMassIndex", operator: "==", value: "normal_weight" },
      { field: "trainingHistory", operator: "==", value: "beginner" },
      { field: "activityLevel", operator: "==", value: "sedentary" },
      { field: "frequencyOfTraining", operator: "==", value: "low" },
      { field: "dietType", operator: "==", value: "normal" },
      { field: "supplements", operator: "==", value: true },
    ],
    recommendations: {
      workoutProgramSlug: "yaslilar_icin_denge",
      mealPlanSlug: "mediterranean_diet",
      explanation:
        "Yaşlı bireyler için denge egzersizleri ve Akdeniz tipi beslenme programı",
    },
  },

  // 7. Fonksiyonel Antrenman
  {
    conditions: [
      { field: "goal", operator: "==", value: "muscle_gain" },
      { field: "bodyMassIndex", operator: "==", value: "underweight" },
      { field: "trainingHistory", operator: "==", value: "intermediate" },
      { field: "activityLevel", operator: "==", value: "moderately_active" },
      { field: "frequencyOfTraining", operator: "==", value: "medium" },
      { field: "dietType", operator: "==", value: "normal" },
      { field: "supplements", operator: "==", value: true },
    ],
    recommendations: {
      workoutProgramSlug: "fonksiyonel_kuvvet",
      mealPlanSlug: "fast_metabolism_diet",
      explanation:
        "Düşük kilolu bireyler için fonksiyonel kuvvet antrenmanı ve hızlı metabolizma diyeti",
    },
  },

  // 8. Postür Düzeltme
  {
    conditions: [
      { field: "goal", operator: "==", value: "maintenance" },
      { field: "bodyMassIndex", operator: "==", value: "normal_weight" },
      { field: "trainingHistory", operator: "==", value: "beginner" },
      { field: "activityLevel", operator: "==", value: "sedentary" },
      { field: "frequencyOfTraining", operator: "==", value: "low" },
      { field: "dietType", operator: "==", value: "normal" },
      { field: "supplements", operator: "==", value: false },
    ],
    recommendations: {
      workoutProgramSlug: "postur_duzeltici",
      mealPlanSlug: "mediterranean_diet",
      explanation:
        "Ofis çalışanları için postür düzeltici egzersizler ve dengeli beslenme planı",
    },
  },

  // 9. Hamstring Esnekliği
  {
    conditions: [
      { field: "goal", operator: "==", value: "maintenance" },
      { field: "bodyMassIndex", operator: "==", value: "normal_weight" },
      { field: "trainingHistory", operator: "==", value: "intermediate" },
      { field: "activityLevel", operator: "==", value: "moderately_active" },
      { field: "frequencyOfTraining", operator: "==", value: "medium" },
      { field: "dietType", operator: "==", value: "vegetarian" },
      { field: "supplements", operator: "==", value: false },
    ],
    recommendations: {
      workoutProgramSlug: "hamstring_esnekligi",
      mealPlanSlug: "vegetarian_muscle_gain",
      explanation:
        "Orta seviye sporcular için hamstring esnekliğini artırıcı program ve vejetaryen beslenme",
    },
  },

  // 10. HIIT Antrenmanı
  {
    conditions: [
      { field: "goal", operator: "==", value: "weight_loss" },
      { field: "bodyMassIndex", operator: "==", value: "overweight" },
      { field: "trainingHistory", operator: "==", value: "intermediate" },
      { field: "activityLevel", operator: "==", value: "moderately_active" },
      { field: "frequencyOfTraining", operator: "==", value: "high" },
      { field: "dietType", operator: "==", value: "normal" },
      { field: "supplements", operator: "==", value: true },
    ],
    recommendations: {
      workoutProgramSlug: "hiit_antrenman",
      mealPlanSlug: "high_energy_athlete_diet",
      explanation:
        "Hızlı kilo vermek isteyen orta seviye sporcular için HIIT programı ve yüksek enerjili diyet",
    },
  },

  // 11. Kettlebell Antrenmanı
  {
    conditions: [
      { field: "goal", operator: "==", value: "muscle_gain" },
      { field: "bodyMassIndex", operator: "==", value: "normal_weight" },
      { field: "trainingHistory", operator: "==", value: "advanced" },
      { field: "activityLevel", operator: "==", value: "very_active" },
      { field: "frequencyOfTraining", operator: "==", value: "high" },
      { field: "dietType", operator: "==", value: "normal" },
      { field: "supplements", operator: "==", value: true },
    ],
    recommendations: {
      workoutProgramSlug: "kettlebell_antrenmani",
      mealPlanSlug: "athlete_nutrition",
      explanation:
        "İleri seviye sporcular için kettlebell antrenmanı ve sporcu beslenmesi",
    },
  },

  // 12. Göğüs ve Omuz Geliştirme
  {
    conditions: [
      { field: "goal", operator: "==", value: "muscle_gain" },
      { field: "bodyMassIndex", operator: "==", value: "normal_weight" },
      { field: "trainingHistory", operator: "==", value: "intermediate" },
      { field: "activityLevel", operator: "==", value: "moderately_active" },
      { field: "frequencyOfTraining", operator: "==", value: "medium" },
      { field: "dietType", operator: "==", value: "normal" },
      { field: "supplements", operator: "==", value: true },
    ],
    recommendations: {
      workoutProgramSlug: "gogus_ve_omuz_gelistirme",
      mealPlanSlug: "muscle_gain_high_protein",
      explanation:
        "Orta seviye sporcular için göğüs ve omuz geliştirme programı",
    },
  },

  // 13. Core Antrenmanı
  {
    conditions: [
      { field: "goal", operator: "==", value: "maintenance" },
      { field: "bodyMassIndex", operator: "==", value: "normal_weight" },
      { field: "trainingHistory", operator: "==", value: "beginner" },
      { field: "activityLevel", operator: "==", value: "lightly_active" },
      { field: "frequencyOfTraining", operator: "==", value: "medium" },
      { field: "dietType", operator: "==", value: "normal" },
      { field: "supplements", operator: "==", value: false },
    ],
    recommendations: {
      workoutProgramSlug: "core_antrenmani",
      mealPlanSlug: "mediterranean_diet",
      explanation:
        "Core bölgesini güçlendirmek isteyenler için temel antrenman programı",
    },
  },

  // 14. Bacak Geliştirme
  {
    conditions: [
      { field: "goal", operator: "==", value: "muscle_gain" },
      { field: "bodyMassIndex", operator: "==", value: "underweight" },
      { field: "trainingHistory", operator: "==", value: "intermediate" },
      { field: "activityLevel", operator: "==", value: "moderately_active" },
      { field: "frequencyOfTraining", operator: "==", value: "medium" },
      { field: "dietType", operator: "==", value: "normal" },
      { field: "supplements", operator: "==", value: true },
    ],
    recommendations: {
      workoutProgramSlug: "bacak_gelistirme",
      mealPlanSlug: "muscle_gain_high_protein",
      explanation:
        "Bacak kaslarını geliştirmek isteyenler için özel antrenman programı",
    },
  },

  // 15. Esneklik ve Denge
  {
    conditions: [
      { field: "goal", operator: "==", value: "maintenance" },
      { field: "bodyMassIndex", operator: "==", value: "normal_weight" },
      { field: "trainingHistory", operator: "==", value: "beginner" },
      { field: "activityLevel", operator: "==", value: "sedentary" },
      { field: "frequencyOfTraining", operator: "==", value: "low" },
      { field: "dietType", operator: "==", value: "vegetarian" },
      { field: "supplements", operator: "==", value: false },
    ],
    recommendations: {
      workoutProgramSlug: "esneklik_ve_denge",
      mealPlanSlug: "vegetarian_muscle_gain",
      explanation: "Esneklik ve denge kazanmak isteyenler için temel program",
    },
  },

  // 16. Kol Geliştirme
  {
    conditions: [
      { field: "goal", operator: "==", value: "muscle_gain" },
      { field: "bodyMassIndex", operator: "==", value: "normal_weight" },
      { field: "trainingHistory", operator: "==", value: "intermediate" },
      { field: "activityLevel", operator: "==", value: "moderately_active" },
      { field: "frequencyOfTraining", operator: "==", value: "medium" },
      { field: "dietType", operator: "==", value: "normal" },
      { field: "supplements", operator: "==", value: true },
    ],
    recommendations: {
      workoutProgramSlug: "kol_gelistirme",
      mealPlanSlug: "muscle_gain_high_protein",
      explanation:
        "Kol kaslarını geliştirmek isteyenler için özel antrenman programı",
    },
  },

  // 17. Hafta Sonu Aktif Dinlenme
  {
    conditions: [
      { field: "goal", operator: "==", value: "maintenance" },
      { field: "bodyMassIndex", operator: "==", value: "normal_weight" },
      { field: "trainingHistory", operator: "==", value: "advanced" },
      { field: "activityLevel", operator: "==", value: "very_active" },
      { field: "frequencyOfTraining", operator: "==", value: "high" },
      { field: "dietType", operator: "==", value: "normal" },
      { field: "supplements", operator: "==", value: true },
    ],
    recommendations: {
      workoutProgramSlug: "hafta_sonu_aktif_dinlenme",
      mealPlanSlug: "mediterranean_diet",
      explanation:
        "Yoğun antrenman yapan sporcular için aktif dinlenme programı",
    },
  },

  // 18. Tam Vücut Fonksiyonel
  {
    conditions: [
      { field: "goal", operator: "==", value: "muscle_gain" },
      { field: "bodyMassIndex", operator: "==", value: "underweight" },
      { field: "trainingHistory", operator: "==", value: "beginner" },
      { field: "activityLevel", operator: "==", value: "sedentary" },
      { field: "frequencyOfTraining", operator: "==", value: "low" },
      { field: "dietType", operator: "==", value: "normal" },
      { field: "supplements", operator: "==", value: true },
    ],
    recommendations: {
      workoutProgramSlug: "tam_vucut_fonksiyonel_antrenman",
      mealPlanSlug: "fast_metabolism_diet",
      explanation:
        "Düşük kilolu bireyler için fonksiyonel tam vücut antrenmanı",
    },
  },

  // 19. Üst Vücut Geliştirme
  {
    conditions: [
      { field: "goal", operator: "==", value: "muscle_gain" },
      { field: "bodyMassIndex", operator: "==", value: "normal_weight" },
      { field: "trainingHistory", operator: "==", value: "intermediate" },
      { field: "activityLevel", operator: "==", value: "moderately_active" },
      { field: "frequencyOfTraining", operator: "==", value: "medium" },
      { field: "dietType", operator: "==", value: "normal" },
      { field: "supplements", operator: "==", value: true },
    ],
    recommendations: {
      workoutProgramSlug: "ust_vucut_gelistirme",
      mealPlanSlug: "muscle_gain_high_protein",
      explanation:
        "Üst vücut kaslarını geliştirmek isteyenler için özel program",
    },
  },
  // 20. Kardiyo ve Güç Antrenmanı
  {
    conditions: [
      { field: "goal", operator: "==", value: "weight_loss" },
      { field: "bodyMassIndex", operator: "==", value: "overweight" },
      { field: "trainingHistory", operator: "==", value: "intermediate" },
      { field: "activityLevel", operator: "==", value: "moderately_active" },
      { field: "frequencyOfTraining", operator: "==", value: "medium" },
      { field: "dietType", operator: "==", value: "normal" },
      { field: "supplements", operator: "==", value: false },
    ],
    recommendations: {
      workoutProgramSlug: "kardiyo_ve_guclu_antrenman",
      mealPlanSlug: "weight_loss_balanced",
      explanation:
        "Kilo vermek isteyenler için kardiyo ve güç antrenmanı kombinasyonu",
    },
  },
];
