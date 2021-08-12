import { IOperator } from "~/types/Operator"

export const mira: IOperator = {
  name: "Mira",
  role: "Defender",
  unit: "GEO",
  ratings: {
    armor: 3,
    speed: 1,
    difficulty: 3,
  },
  meta: {
    gender: "f",
    country: "es",
    season: "Y2S1",
    height: 165,
    weight: 60,
  },
  bio: {
    real_name: "Elena Maria Alvarez del Manzano",
    birthplace: "Madrid, Spain",
  },
}
