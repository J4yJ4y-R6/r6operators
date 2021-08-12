import { IOperator } from "~/types/Operator"

export const glaz: IOperator = {
  name: "Glaz",
  role: "Attacker",
  unit: "SPETSNAZ",
  ratings: {
    armor: 2,
    speed: 2,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "ru",
    season: "Release",
    height: 178,
    weight: 79,
  },
  bio: {
    real_name: "Timur Glazkov",
    birthplace: "Vladivostok, Russia",
  },
}
