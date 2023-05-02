import { useState } from "react"

const GetRandomArrElId = (arr: Array<unknown>) => {
  return Math.floor(Math.random() * arr.length)

}
const signs = ["+", "-"]

const GetEquationString = (sign: string, elements: Array<number | string>) => {
  return elements[0].toString() + " " + sign + " " + elements[1].toString() + " = " + elements[2].toString()
}


function ShuffleArray(array: Array<unknown>) {
  let currentIndex = array.length, randomIndex

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]]
  }

  return array
}

export const useGetEquation = () => {

  const [equation, setEquation] = useState<string>("")
  const [difficulty, setDifficulty] = useState(1)
  const [mulDifficulty, setMulDifficulty] = useState(1)

  const updateEquation = (): void => {
    if (Math.random() > 0.25) {

      const num1 = Math.floor(Math.random() * (10 + difficulty) + 1)
      const num2 = Math.floor(Math.random() * (10 + difficulty) + 1)
      const sign = signs[GetRandomArrElId(signs)] as string


      const elements = [num1, num2, "?"]
      const shuffledElements = ShuffleArray(elements) as number[]

      setEquation(GetEquationString(sign, shuffledElements))
    } else {
      const num1 = Math.floor(Math.random() * (10 + mulDifficulty) + 1)
      const num2 = Math.floor(Math.random() * (10 + mulDifficulty) + 1)
      const sign = "x"

      if (Math.random() > 0.5) {

        const num3 = num1 * num2
        const elements = [num2, num1]

        const shuffledElements = ShuffleArray(elements) as number[]

        const index = GetRandomArrElId(shuffledElements)

        const resArr: Array<string | number> = shuffledElements.map((num, id) => {
          return id === index ? "?" : num
        })

        setEquation(GetEquationString(sign, [...resArr, num3]))
      } else {
        // const num3 = num1 * num2 //answer is num3
        const elements = [num2, num1]

        const shuffledElements = ShuffleArray(elements) as number[]


        setEquation(GetEquationString(sign, [...shuffledElements, "?"]))
      }

    }
  }

  return { equation, updateEquation }

}
