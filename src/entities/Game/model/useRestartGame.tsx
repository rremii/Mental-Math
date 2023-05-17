import { clearAnswers, setBtnId, setResult, setStage, setStageState } from "@entities/Game"
import { useAppDispatch } from "@shared/Hooks/store-hooks"

export const useRestartGame = ()=>{
  const dispatch = useAppDispatch()


  const ResetStage = () => {
    dispatch(clearAnswers())
    dispatch(setStage(0))
    dispatch(setBtnId(null))
    dispatch(setResult("initial"))
    dispatch(setStageState("running"))
  }
  const ResetGame = () => {
    dispatch(clearAnswers())
    dispatch(setStage(0))
    dispatch(setBtnId(null))
    dispatch(setResult("initial"))
    dispatch(setStageState("preStart"))
  }


  return { ResetGame,ResetStage}

}
