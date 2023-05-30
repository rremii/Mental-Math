import { ResultMenu } from "@shared/ui/ResultMenu"
import { useTypedSelector } from "@shared/Hooks/store-hooks"
import { useRestartGame } from "@entities/Game"
import { memo } from "react"

export const QuickMathResultMenu = () => {
  const stage = useTypedSelector(state => state.Stage.stage)
  const result = useTypedSelector(state => state.Stage.result)
  const correctAnswer = useTypedSelector(state => state.Quick.quickCorrectAnswer)
  const wrongAnswer = useTypedSelector(state => state.Quick.quickWrongAnswer)


  const { ResetStage, ResetGame } = useRestartGame()

  return <ResultMenu isHidden={result !== "fail"} result={stage} wrongAnswer={wrongAnswer} correctAnswer={correctAnswer}
                     OnRestart={ResetStage} OnMenu={ResetGame} />
}
