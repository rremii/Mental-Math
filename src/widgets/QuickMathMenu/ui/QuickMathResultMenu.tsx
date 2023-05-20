import { ResultMenu } from "@shared/ui/ResultMenu"
import { useTypedSelector } from "@shared/Hooks/store-hooks"
import { useRestartGame } from "@entities/Game/model/useRestartGame"

export const QuickMathResultMenu = () => {
  const stage = useTypedSelector(state => state.Stage.stage)
  const result = useTypedSelector(state => state.Stage.result)
  const correctAnswer = useTypedSelector(state => state.Game.correctAnswer)
  const wrongAnswer = useTypedSelector(state => state.Game.wrongAnswer)

  const { ResetStage, ResetGame } = useRestartGame()

  return <ResultMenu isHidden={result !== "fail"} result={stage} wrongAnswer={wrongAnswer} correctAnswer={correctAnswer}
                     OnRestart={ResetStage} OnMenu={ResetGame} />
}
