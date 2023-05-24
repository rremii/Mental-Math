import { ShuffleArray } from "@shared/helpers/ShuffleArray"
import { GetRandomArrElId } from "@shared/helpers/GetRandomArrElId"
import { GetEquationString } from "@entities/Game/helpers/GetEquationString"
import { VariablePlaceSide } from "@entities/Game"

export const CreateMultiplyEquation = (mulDifficulty: number, varPlaceSide: VariablePlaceSide = VariablePlaceSide.random) => {
  const num1 = Math.floor(Math.random() * (10 + mulDifficulty) + 1)
  const num2 = Math.floor(Math.random() * (10 + mulDifficulty) + 1)
  const sign = "x"

  const num3 = num1 * num2

  if (Math.random() > varPlaceSide) {

    const elements = [num2, num1]

    const shuffledElements = ShuffleArray(elements) as number[]

    const index = GetRandomArrElId(shuffledElements)

    const resArr: Array<string | number> = shuffledElements.map((num, id) => {
      ////
      if (id === index) return "?"
      else {
        return num
      }
    })

    return GetEquationString(sign, [...resArr, num3])


  } else {
    const elements = [num2, num1]

    const shuffledElements = ShuffleArray(elements) as number[]

    return GetEquationString(sign, [...shuffledElements, "?"])


  }
}
