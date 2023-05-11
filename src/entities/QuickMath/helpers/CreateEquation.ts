import { NoneMultiplySigns } from "@entities/QuickMath/constants"
import { GetRandomArrElId } from "@entities/QuickMath/helpers/GetRandomArrElId"
import { ShuffleArray } from "@entities/QuickMath/helpers/ShuffleArray"
import { GetEquationString } from "@entities/QuickMath/helpers/GetEquationString"

export const CreateEquation = (difficulty: number) => {

  const num1 = Math.floor(Math.random() * (10 + difficulty) + 1)
  const num2 = Math.floor(Math.random() * (10 + difficulty) + 1)
  const sign = NoneMultiplySigns[GetRandomArrElId(NoneMultiplySigns)] as string

  const elements = [num1, num2, "?"]
  const shuffledElements = ShuffleArray(elements) as number[]

  return GetEquationString(sign, shuffledElements)
}
