import { ResultMenu } from "@shared/ui/ResultMenu"
import { useTypedSelector } from "@shared/Hooks/store-hooks"
import { useRestartGame } from "@entities/Game"

export const HardMathResultMenu = () => {

  const stage = useTypedSelector(state => state.Stage.stage)
  const result = useTypedSelector(state => state.Stage.result)
  const correctAnswer = useTypedSelector(state => state.Hard.hardCorrectAnswer)
  const wrongAnswer = useTypedSelector(state => state.Hard.hardWrongAnswer)


  const { ResetGame, ResetStage } = useRestartGame()


  return <ResultMenu isHidden={result !== "fail"} result={stage} wrongAnswer={wrongAnswer} correctAnswer={correctAnswer}
                     OnRestart={ResetStage} OnMenu={ResetGame} />
}
