import { ShuffleArray } from "@entities/QuickMath/helpers/ShuffleArray"
import { GetRandomArrElId } from "@entities/QuickMath/helpers/GetRandomArrElId"
import { GetEquationString } from "@entities/QuickMath/helpers/GetEquationString"

export const CreateMultiplyEquation = (mulDifficulty: number) => {
  const num1 = Math.floor(Math.random() * (10 + mulDifficulty) + 1)
  const num2 = Math.floor(Math.random() * (10 + mulDifficulty) + 1)
  const sign = "x"

  const num3 = num1 * num2

  if (Math.random() > 0.5) {

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
