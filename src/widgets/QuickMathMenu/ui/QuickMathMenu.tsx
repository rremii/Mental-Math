import styled from "styled-components"
import { ButtonsSection } from "@shared/ui/ButtonsSection"
import { EquationSection } from "@shared/ui/EquationSection"
import { GameHeader } from "@shared/ui/GameHeader"
import { ProgressBar } from "@shared/ui/ProgressBar"
import { useEffect, useState } from "react"
import { ResultBtn } from "@shared/ui/ResultBtn"
import { useEquation } from "@entities/QuickMath"
import { clearTimeout } from "timers"
import { useTimer } from "@entities/QuickMath/model/useTimer"

export type resultType = "initial" | "success" | "fail" //TODO

export const QuickMathMenu = () => {


  const {
    equation, setResult, setBtnId, stage,
    setStage, result, btnId,
    answers, correctAnswer, updateEquation
  } = useEquation()

  const { Start: StartTimer, Stop: StopTimer, Reset: ResetTime, time, timerState } = useTimer(10, 1)


  const CheckAnswer = (answer: number, btnId: number) => {
    if (correctAnswer === answer) {
      setResult("success")
      StopTimer()
      setStage(stage => stage + 1)
    } else {
      setResult("fail")
      StopTimer()
      alert("you lost")
    }
    setBtnId(btnId)
  }


  useEffect(() => { //checking time
    if (timerState === "timeout") {
      alert("time is out")
      setResult("fail")
    }
    if (result !== "initial") return

    if (timerState === "initial") StartTimer()

  }, [time, timerState])


  useEffect(() => {
    const timer = setTimeout(() => {
      setBtnId(undefined)
      updateEquation()
      setResult("initial")
      ResetTime()
    }, 1000)

    return () => window.clearTimeout(timer)
  }, [stage])

  return <QuickMathLayout>
    <GameHeader time={time} currentScore={stage} />
    <ProgressBar progress={time / 10} />
    <EquationSection equation={equation} />
    <ButtonsSection>
      {answers?.map((answer, i) => {


        return <ResultBtn isDisabled={result !== "initial"} result={i === btnId ? result : "initial"}
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
