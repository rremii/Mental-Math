import { ResultMenu } from "@shared/ui/ResultMenu"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { clearAnswers, setBtnId, setResult, setStage, setStageState } from "@entities/Game"

export const QuickMathResultMenu = () => {
  const dispatch = useAppDispatch()

  const stage = useTypedSelector(state => state.Game.stage)
  const result = useTypedSelector(state => state.Game.result)
  const correctAnswer = useTypedSelector(state => state.Game.correctAnswer)
  const wrongAnswer = useTypedSelector(state => state.Game.wrongAnswer)


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

  return <ResultMenu isHidden={result !== "fail"} result={stage} wrongAnswer={wrongAnswer} correctAnswer={correctAnswer}
                     OnRestart={ResetStage} OnMenu={ResetGame} />
}
