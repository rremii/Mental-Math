import { ResultMenu } from "@shared/ui/ResultMenu"
import { useTypedSelector } from "@shared/Hooks/store-hooks"
import { useRestartGame } from "@entities/Game/model/useRestartGame"

export const BalanceMathResultMenu = () => {

  const stage = useTypedSelector(state => state.Stage.stage)
  const result = useTypedSelector(state => state.Stage.result)
  const correctAnswer = useTypedSelector(state => state.Game.balanceCorrectAnswer)


  const { ResetGame, ResetStage } = useRestartGame()


  return <ResultMenu isHidden={result !== "fail"} result={stage}
                     wrongAnswer={correctAnswer === "greater" ? "smaller" : "greater"}
                     correctAnswer={correctAnswer}
                     OnRestart={ResetStage} OnMenu={ResetGame} />
}