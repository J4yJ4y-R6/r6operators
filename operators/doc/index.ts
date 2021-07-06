import { Operator } from "~/types/Operator"

export const doc: Operator = {
  name: "Doc",
  role: "Defender",
  unit: "GIGN",
  ratings: {
    armor: 3,
    speed: 1,
    difficulty: 1,
  },
  meta: {
    sex: "m",
    country: "fr",
    season: "Release",
    height: 177,
    weight: 79,
  },
  bio: {
    real_name: "Gustave Kateb",
    birthplace: "Paris, France",
  },
}
