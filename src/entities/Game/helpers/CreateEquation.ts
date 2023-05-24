import { NoneMultiplySigns } from "@entities/Game/constants"
import { GetRandomArrElId } from "@shared/helpers/GetRandomArrElId"
import { ShuffleArray } from "@shared/helpers/ShuffleArray"
import { GetEquationString } from "@entities/Game/helpers/GetEquationString"
import { VariablePlaceSide } from "@entities/Game"

export const CreateEquation = (difficulty: number, varPlaceSide: VariablePlaceSide= VariablePlaceSide.random) => {

  const num1 = Math.floor(Math.random() * (10 + difficulty) + 1)
  const num2 = Math.floor(Math.random() * (10 + difficulty) + 1)
  const sign = NoneMultiplySigns[GetRandomArrElId(NoneMultiplySigns)] as string

  if (Math.random() > varPlaceSide) {
    //var in left part

    const elements = [num1, "?"]
    const shuffledElements = ShuffleArray(elements) as number[]

    return GetEquationString(sign, [...shuffledElements, num2])

  } else {
    const elements = [num1, num2]
    const shuffledElements = ShuffleArray(elements) as number[]

    return GetEquationString(sign, [...shuffledElements, "?"])

  }

}
