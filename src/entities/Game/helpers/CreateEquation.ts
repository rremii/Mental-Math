import { NoneMultiplySigns } from "@entities/Game/constants"
import { GetRandomArrElId } from "@shared/helpers/GetRandomArrElId"
import { ShuffleArray } from "@shared/helpers/ShuffleArray"
import { GetEquationString } from "@entities/Game/helpers/GetEquationString"

export const CreateEquation = (difficulty: number) => {

  const num1 = Math.floor(Math.random() * (10 + difficulty) + 1)
  const num2 = Math.floor(Math.random() * (10 + difficulty) + 1)
  const sign = NoneMultiplySigns[GetRandomArrElId(NoneMultiplySigns)] as string

  const elements = [num1, num2, "?"]
  const shuffledElements = ShuffleArray(elements) as number[]

  return GetEquationString(sign, shuffledElements)
}
