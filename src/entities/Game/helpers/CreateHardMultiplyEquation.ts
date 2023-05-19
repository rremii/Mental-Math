import { ShuffleArray } from "@shared/helpers/ShuffleArray"
import { GetRandomArrElId } from "@shared/helpers/GetRandomArrElId"
import { GetEquationString } from "@entities/Game/helpers/GetEquationString"
import { GetHardEquationStr } from "@entities/Game/helpers/GetHardEquationStr"

export const CreateHardMultiplyEquation = (mulDifficulty: number) => {
  const num1 = Math.floor(Math.random() * (10 + mulDifficulty) + 1)
  const num2 = Math.floor(Math.random() * (10 + mulDifficulty) + 1)
  const num3 = Math.floor(Math.random() * (10 + mulDifficulty) + 1)
  const sign = "x"

  const num4 = num1 * num2 * num3

  if (Math.random() > 0.5) {

    const elements = [num2, num1, num3]

    const shuffledElements = ShuffleArray(elements) as number[]

    const index = GetRandomArrElId(shuffledElements)

    const resArr: Array<string | number> = shuffledElements.map((num, id) => {
      ////
      if (id === index) return "?"
      else {
        return num
      }
    })

    return GetHardEquationStr([sign, sign], [...resArr, num4])


  } else {
    const elements = [num2, num1, num3]

    const shuffledElements = ShuffleArray(elements) as number[]

    return GetHardEquationStr([sign, sign], [...shuffledElements, "?"])


  }
}
