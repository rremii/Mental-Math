import { useState } from "react"
import { MultiplyChance } from "@entities/QuickMath/constants"
import { SolveEquation } from "../helpers/SolveEquation"
import { CreateEquation } from "../helpers/CreateEquation"
import { CreateMultiplyEquation } from "../helpers/CreateMultiplyEquation"
import { GetAnswersArr } from "@entities/QuickMath/helpers/GetAnswersArr"
import { resultType } from "@widgets/QuickMathMenu"


const IsMultiply = () => {
  const random = Math.random()
  return random < MultiplyChance
}


export const useEquation = () => {
  // const [time, setTime] = useState(3)
  const [stage, setStage] = useState(2)

  const [result, setResult] = useState<resultType>("initial")
  const [btnId, setBtnId] = useState<number>()
  const [equation, setEquation] = useState<string>("")
  const [answers, setAnswers] = useState<number[]>()
  const [correctAnswer, setCorrectAnswer] = useState<number>()
  const [difficulty, setDifficulty] = useState(1)
  const [mulDifficulty, setMulDifficulty] = useState(1)


  const updateEquation = (): void => {
    let equation: string = ""
    if (IsMultiply()) {
      equation = CreateMultiplyEquation(mulDifficulty)
      setMulDifficulty(difficulty => difficulty + 1)
    } else {
      equation = CreateEquation(difficulty)
      setDifficulty(difficulty => difficulty + 1)
    }

    setEquation(equation)

    const answer = SolveEquation(equation)
    setCorrectAnswer(answer)
    const answers = GetAnswersArr(answer)
    setAnswers(answers)

  }

  return {
    equation, answers,
    correctAnswer, updateEquation,
    // time, setTime,
    stage, setStage,
    result, setResult,
    btnId, setBtnId
  }

}
