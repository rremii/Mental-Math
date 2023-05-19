import { NoneMultiplySigns } from "@entities/Game"
import { GetRandomArrElId } from "@shared/helpers/GetRandomArrElId"
import { ShuffleArray } from "@shared/helpers/ShuffleArray"
import { GetEquationString } from "@entities/Game/helpers/GetEquationString"
import { GetHardEquationStr } from "@entities/Game/helpers/GetHardEquationStr"

export const CreateHardEquation = (difficulty: number) => {

  const num1 = Math.floor(Math.random() * (10 + difficulty) + 1)
  const num2 = Math.floor(Math.random() * (10 + difficulty) + 1)
  const num3 = Math.floor(Math.random() * (10 + difficulty) + 1)

  const sign1 = NoneMultiplySigns[GetRandomArrElId(NoneMultiplySigns)] as string
  const sign2 = NoneMultiplySigns[GetRandomArrElId(NoneMultiplySigns)] as string

  const elements = [num1, num2, num3, "?"]
  const shuffledElements = ShuffleArray(elements) as Array<number | string>

  return GetHardEquationStr([sign1, sign2], shuffledElements)
}
