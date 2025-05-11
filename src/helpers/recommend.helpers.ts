import { RecommendEnums } from "../enums";
import { ActivityLevelType, BMIEnumType } from "../types/recommend.types";

export const matchConditions = (
  ruleConditions: Array<Record<string, any>>,
  userData: Record<string, any>
) => {
  return ruleConditions.every((cond) => {
    switch (cond.operator) {
      case "==":
        return userData[cond.field] === cond.value;
      // İleride ihtiyaca göre > < >= gibi operatörler de eklenebilir
      default:
        return false;
    }
  });
};

// Bazal metabolizma hızını (BMR) hesaplar
export const calculateBasalMetabolicRate = (
  weightKg: number,
  heightCm: number,
  age: number,
  gender: "male" | "female"
): number => {
  if (gender === "male") {
    return 88.362 + 13.397 * weightKg + 4.799 * heightCm - 5.677 * age;
  } else {
    return 447.593 + 9.247 * weightKg + 3.098 * heightCm - 4.33 * age;
  }
};

// Toplam günlük enerji harcamasını (TDEE) hesaplar
// TDEE = BMR * Aktivite Seviyesi
export const calculateTotalDailyEnergyExpenditure = (
  bmr: number,
  activityLevel: ActivityLevelType
): number => {
  const activityLevels = Object.values(RecommendEnums.ACTIVITY_LEVEL_ENUM);
  const activityLevelEnum = activityLevels.find(
    (level) => level.type === activityLevel
  );

  return bmr * activityLevelEnum.max;
};

// Vücut kitle endeksini (BMI) hesaplar
// BMI = kg/m^2
export const calculateBodyMassIndex = (
  weightKg: number,
  heightCm: number
): number => {
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
};

// Vücüt kitle endeksi değerine (BMI) göre kategorisini döndürür
export const getBmiCategory = (bmi: number): BMIEnumType => {
  const categories = Object.values(RecommendEnums.BMIEnum);
  const category = categories.find((cat) => bmi >= cat.min && bmi <= cat.max);
  return category;
};
