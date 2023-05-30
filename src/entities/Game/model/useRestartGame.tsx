import {
  clearBalanceAnswers,
  clearHardAnswers,
  clearInputAnswers,
  clearQuickAnswers,
  clearTrueFalseAnswers,
  setBtnId,
  setResult,
  setStage,
  setStageState
} from "@entities/Game"
import { useAppDispatch } from "@shared/Hooks/store-hooks"

export const useRestartGame = () => {
  const dispatch = useAppDispatch()

  const MainReset = () => {
    dispatch(clearQuickAnswers())
    dispatch(clearHardAnswers())
    dispatch(clearInputAnswers())
    dispatch(clearBalanceAnswers())
    dispatch(clearTrueFalseAnswers())
    dispatch(setStage(0))
    dispatch(setBtnId(null))
    dispatch(setResult("initial"))
  }

  const ResetStage = () => {
    MainReset()
    dispatch(setStageState("running"))
  }
  const ResetGame = () => {
    MainReset()
    dispatch(setStageState("preStart"))
  }


  return { ResetGame, ResetStage }

}
