import { useState } from "react"
import { GetEquationString } from "../helpers/GetEquationString"
import { GetRandomArrElId } from "../helpers/GetRandomArrElId"
import { ShuffleArray } from "../helpers/ShuffleArray"
import { MultiplyChance } from "@entities/QuickMath/constants"


const NoneMultiplySigns = ["+", "-"]

const IsMultiply = () => {
  return Math.random() < 0.01
}

const SolveEquation = (equation: string) => {


  const [equationStringLeft, equationStringRight] = equation.split("=")

  const equationArrLeft = equationStringLeft.split(" ")

  let sign: string = ""
  equationArrLeft.forEach((el, i) => {
    if (el === "?" && equationArrLeft[i - 1]) sign = equationArrLeft[i - 1]
  })


  let curNum: number | null = null

  if (equationStringRight === " ?") {

    equationArrLeft.forEach((el: string, i) => {
        if (el === "+") {
          if (!curNum) curNum = 0
          curNum = Number(curNum + +equationArrLeft[i + 1])
        }
        if (el === "-") {
          if (!curNum) curNum = 0
          curNum = Number(curNum - +equationArrLeft[i + 1])
        }
        if (+el && !curNum && curNum !== 0) {
          curNum = +el
        }

      }
    )
  }
  if (equationArrLeft.includes("?") && sign !== "-") {
    equationArrLeft.forEach((el: string, i) => {


        if (el === "+" && +equationArrLeft[i + 1]) {
          if (!curNum) curNum = 0
          curNum = Number(curNum + +equationArrLeft[i + 1])
        }
        if (el === "-" && +equationArrLeft[i + 1]) {
          if (!curNum) curNum = 0
          curNum = Number(curNum - +equationArrLeft[i + 1])
        }
        if (+el && curNum === null) {
          curNum = +el
        }

      }
    )
    curNum = +equationStringRight - (curNum ? curNum : 0)
  }
  if (equationArrLeft.includes("?") && sign === "-") {
    equationArrLeft.forEach((el: string, i) => {


        if (el === "+" && +equationArrLeft[i + 1]) {
          if (!curNum) curNum = 0
          curNum = Number(curNum + +equationArrLeft[i + 1])
        }
        if (el === "-" && +equationArrLeft[i + 1]) {
          if (!curNum) curNum = 0
          curNum = Number(curNum - +equationArrLeft[i + 1])
        }
        if (+el && curNum === null) {
          curNum = +el
        }

      }
    )
    curNum = (curNum ? curNum : 0) - +equationStringRight
  }


  return curNum
}


export const useGetEquation = () => {

  const [equation, setEquation] = useState<string>("")
  const [answer, setAnswer] = useState<number>()
  const [difficulty, setDifficulty] = useState(1)
  const [mulDifficulty, setMulDifficulty] = useState(1)

  const CreateEquation = () => {

    const num1 = Math.floor(Math.random() * (10 + difficulty) + 1)
    const num2 = Math.floor(Math.random() * (10 + difficulty) + 1)
    const sign = NoneMultiplySigns[GetRandomArrElId(NoneMultiplySigns)] as string

    const elements = [num1, num2, "?"]
    const shuffledElements = ShuffleArray(elements) as number[]

    const equation = GetEquationString(sign, shuffledElements)

    setEquation(equation)
    const answer = SolveEquation(equation)

    setAnswer(answer ? answer : 0)

    // setAnswer(num3)
  }
  const CreateMultiplyEquation = () => {
    const num1 = Math.floor(Math.random() * (10 + mulDifficulty) + 1)
    const num2 = Math.floor(Math.random() * (10 + mulDifficulty) + 1)
    const sign = "x"

    const num3 = num1 * num2 //answer is num3


    if (Math.random() > 0.5) {

      const elements = [num2, num1]

      const shuffledElements = ShuffleArray(elements) as number[]

      const index = GetRandomArrElId(shuffledElements)

      const resArr: Array<string | number> = shuffledElements.map((num, id) => {
        ////
        if (id === index) return "?"
        else {
          setAnswer(num3 / num)
          return num
        }
      })

      setEquation(GetEquationString(sign, [...resArr, num3]))
    } else {
      const elements = [num2, num1]

      const shuffledElements = ShuffleArray(elements) as number[]
      setAnswer(num3)
      setEquation(GetEquationString(sign, [...shuffledElements, "?"]))
    }
  }


  const updateEquation = (): void => {
    if (true) {
      CreateEquation()
    } else {
      CreateMultiplyEquation()
    }
  }

  return { equation, answer, updateEquation }

}
