import styled from "styled-components"
import { ResultMenu } from "@shared/ui/ResultMenu"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { useEffect } from "react"
import { setBtnId, setResult, setStage } from "@entities/QuickMath"

export const QuickMathResultMenu = () => {
  const dispatch = useAppDispatch()

  const stage = useTypedSelector(state => state.QuickMath.stage)
  const result = useTypedSelector(state => state.QuickMath.result)
  const correctAnswer = useTypedSelector(state => state.QuickMath.correctAnswer)
  const wrongAnswer = useTypedSelector(state => state.QuickMath.wrongAnswer)


  const ResetGame = () => {
    dispatch(setStage(0))
    dispatch(setBtnId(null))
    dispatch(setResult("initial"))
  }

  return <ResultMenu isHidden={result !== "fail"} result={stage} wrongAnswer={wrongAnswer} correctAnswer={correctAnswer}
                     OnRestart={ResetGame} />
}
