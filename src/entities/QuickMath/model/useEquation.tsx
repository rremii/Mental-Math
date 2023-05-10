import { useState } from "react"
import { MultiplyChance } from "@entities/QuickMath/constants"
import { SolveEquation } from "../helpers/SolveEquation"
import { CreateEquation } from "../helpers/CreateEquation"
import { CreateMultiplyEquation } from "../helpers/CreateMultiplyEquation"
import { GetAnswersArr } from "@entities/QuickMath/helpers/GetAnswersArr"


const IsMultiply = () => {
  const random = Math.random()
  return random < MultiplyChance
}

export const useEquation = () => {


  const [equation, setEquation] = useState<string>("")
  const [answers, setAnswers] = useState<string[] | number[]>(["", "", "", ""])
  const [correctAnswer, setCorrectAnswer] = useState<number | null>(null)
  const [difficulty, setDifficulty] = useState(1)
  const [mulDifficulty, setMulDifficulty] = useState(1)


  const updateEquation = (): void => {
    let equation = ""
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
  const resetDifficulty = () => {
    setDifficulty(1)
    setMulDifficulty(1)
  }

  return {
    equation, answers,
    resetDifficulty,
    correctAnswer, updateEquation
  }

}
