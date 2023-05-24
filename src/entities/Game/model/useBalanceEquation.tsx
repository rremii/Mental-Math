import { CreateMultiplyEquation } from "@entities/Game/helpers/CreateMultiplyEquation"
import {
  MultiplyChance,
  setBalanceCorrect,
  setBalanceEquations,
  setDifficulty,
  setMulDifficulty,
  VariablePlaceSide
} from "@entities/Game"
import { CreateEquation } from "@entities/Game/helpers/CreateEquation"
import { SolveEquation } from "@shared/helpers/SolveEquation"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"

const IsMultiply = () => {
  const random = Math.random()
  return random < MultiplyChance
}


export const useBalanceEquation = (answersAmount?: number) => {
  const dispatch = useAppDispatch()

  const mulDifficulty = useTypedSelector(state => state.Game.mulDifficulty)
  const difficulty = useTypedSelector(state => state.Game.difficulty)


  const GetEquation = (): string => {
    let equation = ""
    if (IsMultiply()) {
      equation = CreateMultiplyEquation(mulDifficulty, VariablePlaceSide.rightSide)
      dispatch(setMulDifficulty(difficulty + 1))
    } else {
      equation = CreateEquation(difficulty, VariablePlaceSide.rightSide)
      dispatch(setDifficulty(difficulty + 1))
    }
    return equation
  }

  const updateEquation = (): void => {

    let answer1: number
    let answer2: number
    let equation1: string = ""
    let equation2: string = ""


    do {
      equation1 = GetEquation()
      equation2 = GetEquation()

      answer1 = SolveEquation(equation1)
      answer2 = SolveEquation(equation2)
    } while (answer1 === answer2)

    let equalId1: number = 0
    let equalId2: number = 0
    equation1.split("").forEach((el, i) => {
      if (el === "=") equalId1 = i
    })
    equation2.split("").forEach((el, i) => {
      if (el === "=") equalId2 = i
    })

    dispatch(setBalanceEquations([equation1.slice(0, equalId1), equation2.slice(0, equalId2)]))

    if (answer1 > answer2) {
      dispatch(setBalanceCorrect("greater"))
    } else {
      dispatch(setBalanceCorrect("smaller"))
    }
    // const answers = GetAnswersArr(answer, answersAmount)
    // dispatch(setQuickAnswers(answers))
  }

  return { updateEquation }

}
