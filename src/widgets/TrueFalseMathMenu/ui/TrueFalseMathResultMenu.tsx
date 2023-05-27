import { ResultMenu } from "@shared/ui/ResultMenu"
import { useTypedSelector } from "@shared/Hooks/store-hooks"
import { useRestartGame } from "@entities/Game"

export const TrueFalseMathResultMenu = () => {

  const stage = useTypedSelector(state => state.Stage.stage)
  const result = useTypedSelector(state => state.Stage.result)
  const correctAnswer = useTypedSelector(state => state.TrueFalse.trueFalseCorrectAnswer)
  const currentAnswer = useTypedSelector(state => state.TrueFalse.trueFalseCurrentAnswer)


  const { ResetGame, ResetStage } = useRestartGame()


  return <ResultMenu isHidden={result !== "fail"} result={stage} wrongAnswer={"" + (currentAnswer !== correctAnswer)}
                     correctAnswer={"" + (currentAnswer === correctAnswer)}
                     OnRestart={ResetStage} OnMenu={ResetGame} />
}
