import { CreateMultiplyEquation } from "@entities/Game/helpers/CreateMultiplyEquation"
import {
  MultiplyChance,
  setCorrectAnswer,
  setDifficulty,
  setEquation,
  setMulDifficulty, setQuickAnswers, setQuickCorrect, setQuickEquation
} from "@entities/Game"
import { CreateEquation } from "@entities/Game/helpers/CreateEquation"
import { SolveEquation } from "@shared/helpers/SolveEquation"
import { GetAnswersArr } from "@shared/helpers/GetAnswersArr"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"

const IsMultiply = () => {
  const random = Math.random()
  return random < MultiplyChance
}

export const useQuickEquation = (answersAmount?: number) => {
  const dispatch = useAppDispatch()

  const mulDifficulty = useTypedSelector(state => state.Game.mulDifficulty)
  const difficulty = useTypedSelector(state => state.Game.difficulty)


  const updateEquation = (): void => {
    let equation = ""
    if (IsMultiply()) {
      equation = CreateMultiplyEquation(mulDifficulty)
      dispatch(setMulDifficulty(difficulty + 1))
    } else {
      equation = CreateEquation(difficulty)
      dispatch(setDifficulty(difficulty + 1))
    }
    dispatch(setQuickEquation(equation))

    const answer = SolveEquation(equation)
    dispatch(setQuickCorrect(answer))
    const answers = GetAnswersArr(answer, answersAmount)
    dispatch(setQuickAnswers(answers))
  }

  return { updateEquation }

}
