import { CreateMultiplyEquation } from "@entities/Game/helpers/CreateMultiplyEquation"
import {
  MultiplyChance,
  setCorrectAnswer,
  setDifficulty,
  setEquation,
  setMulDifficulty, setQuickAnswers
} from "@entities/Game"
import { CreateEquation } from "@entities/Game/helpers/CreateEquation"
import { SolveEquation } from "@shared/helpers/SolveEquation"
import { GetAnswersArr } from "@shared/helpers/GetAnswersArr"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { CreateHardEquation } from "@entities/Game/helpers/CreateHardEquation"
import { CreateHardMultiplyEquation } from "@entities/Game/helpers/CreateHardMultiplyEquation"

const IsMultiply = () => {
  const random = Math.random()
  return random < MultiplyChance
}

export const useHardEquation = () => {
  const dispatch = useAppDispatch()

  const mulDifficulty = useTypedSelector(state => state.Game.mulDifficulty)
  const difficulty = useTypedSelector(state => state.Game.difficulty)


  const updateEquation = (): void => {
    let equation = ""
    if (IsMultiply()) {
      equation = CreateHardMultiplyEquation(mulDifficulty)
      dispatch(setMulDifficulty(difficulty + 1))
    } else {
      equation = CreateHardEquation(difficulty)
      dispatch(setDifficulty(difficulty + 1))
    }
    debugger
    dispatch(setEquation(equation))

    const answer = SolveEquation(equation)
    dispatch(setCorrectAnswer(answer))
    const answers = GetAnswersArr(answer)
    dispatch(setQuickAnswers(answers))
  }

  return { updateEquation }

}
