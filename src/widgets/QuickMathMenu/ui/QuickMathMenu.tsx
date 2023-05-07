import styled from "styled-components"
import { ButtonsSection } from "@shared/ui/ButtonsSection"
import { EquationSection } from "@shared/ui/EquationSection"
import { GameHeader } from "@shared/ui/GameHeader"
import { ProgressBar } from "@shared/ui/ProgressBar"
import { useEffect, useState } from "react"
import { ResultBtn } from "@shared/ui/ResultBtn"
import { setBtnId, setCorrectAnswer, setResult, setStage, setWrongAnswer, useEquation } from "@entities/QuickMath"
import { clearTimeout } from "timers"
import { useTimer } from "@entities/QuickMath/model/useTimer"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"

export type resultType = "initial" | "success" | "fail" //TODO

export const QuickMathMenu = () => {
  const dispatch = useAppDispatch()

  const stage = useTypedSelector(state => state.QuickMath.stage)
  const result = useTypedSelector(state => state.QuickMath.result)
  const clickedBtnId = useTypedSelector(state => state.QuickMath.clickedBtnId)


  const { equation, answers, correctAnswer, updateEquation, resetDifficulty } = useEquation()

  const { Start: StartTimer, Stop: StopTimer, Reset: ResetTime, time, timerState } = useTimer(10, 1)


  const CheckAnswer = (answer: number, btnId: number) => {
    if (correctAnswer === answer) {
      dispatch(setResult("success"))
      StopTimer()
      dispatch(setStage((stage + 1)))
    } else {
      dispatch(setResult("fail"))
      dispatch(setCorrectAnswer(correctAnswer))
      dispatch(setWrongAnswer(answer))
      StopTimer()
    }
    dispatch(setBtnId(btnId))
  }


  useEffect(() => { //checking time
    if (timerState === "timeout") {
      dispatch(setResult("fail"))
      dispatch(setCorrectAnswer(correctAnswer))
    }
    if (result !== "initial") return

    if (timerState === "initial") StartTimer()

  }, [time, timerState])

//TODO useResetGame
  useEffect(() => {

    if (result === "initial") {
      updateEquation()
      ResetTime()
      resetDifficulty()
    }

    if (result !== "success") return
    const timer = setTimeout(() => {
      dispatch(setBtnId(null))
      updateEquation()
      resetDifficulty()
      dispatch(setResult("initial"))
      ResetTime()
    }, 1000)

    return () => window.clearTimeout(timer)
  }, [stage, result])

  return <QuickMathLayout>
    <GameHeader time={time} currentScore={stage} />
    <ProgressBar progress={time / 10} />
    <EquationSection equation={equation} />
    <ButtonsSection>
      {answers?.map((answer, i) => {
        let btnResult: resultType = "initial"
        if (i === clickedBtnId && result === "fail") btnResult = "fail"
        if (i === clickedBtnId && result === "success") btnResult = "success"
        if (answer === correctAnswer && result === "fail") btnResult = "success"
        return <ResultBtn isDisabled={result !== "initial"} result={btnResult}
                          onClick={() => CheckAnswer(answer, i)}
                          key={i}>{answer}</ResultBtn>
      })}
    </ButtonsSection>
  </QuickMathLayout>
}
const QuickMathLayout = styled.div`
  background: linear-gradient(121.57deg, #1f0031 49.39%, #150024 50.22%);
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 0 20px 40px;
`
