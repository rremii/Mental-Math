import styled from "styled-components"
import { ButtonsSection } from "@shared/ui/ButtonsSection"
import { EquationSection } from "@shared/ui/EquationSection"
import { GameHeader } from "@shared/ui/GameHeader"
import { ProgressBar } from "@shared/ui/ProgressBar"
import { useEffect, useState } from "react"
import { ResultBtn } from "@shared/ui/ResultBtn"
import {
  setBtnId,
  setCorrectAnswer,
  setResult,
  setStage,
  setStageState,
  setWrongAnswer,
  useEquation
} from "@entities/QuickMath"
import { clearTimeout } from "timers"
import { useTimer } from "@entities/QuickMath/model/useTimer"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { useIsPreStart } from "@entities/QuickMath/model/useIsPreStart"
import { PreStartTimer } from "@shared/ui/PreStartTimer"

export type resultType = "initial" | "success" | "fail" //TODO
export type stageType = "preStart" | "running" | "finished" //TODO


//TODO fix

export const preStartTime = 3
export const preStartTimeGap = 1


export const QuickMathMenu = () => {
  const dispatch = useAppDispatch()

  const stage = useTypedSelector(state => state.QuickMath.stage)
  const result = useTypedSelector(state => state.QuickMath.result)
  const stageState = useTypedSelector(state => state.QuickMath.stageState)
  const clickedBtnId = useTypedSelector(state => state.QuickMath.clickedBtnId)


  const { equation, answers, correctAnswer, updateEquation, resetDifficulty } = useEquation()

  const { Start: StartTimer, Stop: StopTimer, Reset: ResetTime, time, timerState } = useTimer(10, 1)


  const CheckAnswer = (answer: number, btnId: number) => {
    if (correctAnswer === answer) {
      dispatch(setResult("success"))
      dispatch(setStage((stage + 1)))
    } else {
      dispatch(setResult("fail"))
      dispatch(setCorrectAnswer(correctAnswer))
      dispatch(setWrongAnswer(answer))
      resetDifficulty()
    }
    StopTimer()
    dispatch(setStageState("finished"))
    dispatch(setBtnId(btnId))
  }


  useEffect(() => { //checking time
    if (timerState === "timeout") {
      dispatch(setResult("fail"))
      dispatch(setStageState("finished"))
      dispatch(setCorrectAnswer(correctAnswer))
      resetDifficulty()
    }
    if (stageState !== "running") return

    if (timerState === "initial") StartTimer()

  }, [time, timerState])

//TODO useResetGame
  useEffect(() => {

    if (stageState === "running") {
      updateEquation()
      ResetTime()
    }

    if (result !== "success") return
    const timer = setTimeout(() => {
      dispatch(setBtnId(null))
      updateEquation()
      dispatch(setResult("initial"))
      dispatch(setStageState("running"))
      ResetTime()
    }, 1000)

    return () => window.clearTimeout(timer)
  }, [stageState])


  const { isPreStart } = useIsPreStart(preStartTime, preStartTimeGap)


  useEffect(() => {
    if (!isPreStart) dispatch(setStageState("running"))
  }, [isPreStart])

  return <QuickMathLayout>
    <GameHeader time={time} currentScore={stage} />
    <ProgressBar progress={time / 10} />
    {!isPreStart ? <EquationSection equation={equation} />
      : <>
        <h3 className="preTitle">Choose the right answer</h3>
        <PreStartTimer initTime={preStartTime} timeGap={preStartTimeGap} /></>}
    <ButtonsSection>

      {answers?.map((answer, i) => {
        let btnResult: resultType = "initial"
        if (i === clickedBtnId && result === "fail") btnResult = "fail"
        if (i === clickedBtnId && result === "success") btnResult = "success"
        if (answer === correctAnswer && result === "fail") btnResult = "success"
        return <ResultBtn isDisabled={result !== "initial"} result={btnResult}
                          onClick={() => CheckAnswer(+answer, i)}
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

  .preStartTimer {
    flex: 1 1 auto;
    width: 100%;
  }

  .preTitle {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    /* identical to box height, or 94% */
    width: 100%;
    display: flex;

    text-align: center;
    align-items: center;
    justify-content: center;

    letter-spacing: 0.2em;
    margin-top: 50px;
    color: #FFFFFF;
  }
`
