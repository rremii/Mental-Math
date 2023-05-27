import {
  clearBalanceAnswers,
  clearHardAnswers,
  clearInputAnswers,
  clearQuickAnswers,
  clearTrueFalseAnswers
} from "@entities/Game"
import { useAppDispatch } from "@shared/Hooks/store-hooks"
import { setBtnId, setResult, setStage, setStageState } from "@entities/Game"

export const useRestartGame = () => {
  const dispatch = useAppDispatch()


  const ResetStage = () => {
    dispatch(clearQuickAnswers())
    dispatch(clearHardAnswers())
    dispatch(clearInputAnswers())
    dispatch(clearBalanceAnswers())
    dispatch(clearTrueFalseAnswers())
    dispatch(setStage(0))
    dispatch(setBtnId(null))
    dispatch(setResult("initial"))
    dispatch(setStageState("running"))
  }
  const ResetGame = () => {
    dispatch(setStage(0))
    dispatch(setBtnId(null))
    dispatch(setResult("initial"))
    dispatch(setStageState("preStart"))
  }


  return { ResetGame, ResetStage }

}
