import { ResultMenu } from "@shared/ui/ResultMenu"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { clearAnswers, setBtnId, setResult, setStage, setStageState } from "@entities/Game"
import { useRestartGame } from "@entities/Game/model/useRestartGame"

export const HardMathResultMenu = () => {

  const stage = useTypedSelector(state => state.Game.stage)
  const result = useTypedSelector(state => state.Game.result)
  const correctAnswer = useTypedSelector(state => state.Game.correctAnswer)
  const wrongAnswer = useTypedSelector(state => state.Game.wrongAnswer)


  const { ResetGame, ResetStage } = useRestartGame()


  return <ResultMenu isHidden={result !== "fail"} result={stage} wrongAnswer={wrongAnswer} correctAnswer={correctAnswer}
                     OnRestart={ResetStage} OnMenu={ResetGame} />
}
