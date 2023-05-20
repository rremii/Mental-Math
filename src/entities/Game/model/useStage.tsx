import { useEffect } from "react"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import {
  setCorrectAnswer,
  setDifficulty,
  setMulDifficulty,
  setWrongAnswer,
  StageTimeGap
} from "@entities/Game"
import { useTimer } from "@shared/Hooks/useTimer"
import { setBtnId, setResult, setStage, setStageState } from "./StageSlice"


export const useStage = (UpdateEquation: () => void, UpdateUserScore: () => void, StageTime: number) => {
  const dispatch = useAppDispatch()

  const stage = useTypedSelector(state => state.Stage.stage)
  const result = useTypedSelector(state => state.Stage.result)
  const stageState = useTypedSelector(state => state.Stage.stageState)
  const correctAnswer = useTypedSelector(state => state.Game.correctAnswer)


  const {
    Start: StartTimer,
    Stop: StopTimer,
    Reset: ResetTime,
    time: stageTime,
    timerState
  } = useTimer(StageTime, StageTimeGap)


  const resetDifficulty = () => {
    dispatch(setDifficulty(1))
    dispatch(setMulDifficulty(1))
  }

  useEffect(() => {
    if (timerState === "timeout") {
      dispatch(setResult("fail"))
      dispatch(setStageState("finished"))
      dispatch(setCorrectAnswer(correctAnswer))
      resetDifficulty()
    }

    if (timerState === "initial" && stageState === "running") StartTimer()
  }, [stageTime, timerState])


  useEffect(() => {

    if (stageState === "running") {
      UpdateEquation()
      ResetTime()
    }

    if (result !== "success") return

    const timer = setTimeout(() => {
      dispatch(setBtnId(null))
      UpdateEquation()
      dispatch(setResult("initial"))
      dispatch(setStageState("running"))
      ResetTime()
    }, StageTimeGap * 1000)

    return () => window.clearTimeout(timer)
  }, [stageState])


  const HandleSuccess = (clickedBtnId: number) => {
    dispatch(setResult("success"))
    dispatch(setStage((stage + 1)))
    dispatch(setStageState("finished"))
    dispatch(setBtnId(clickedBtnId))
    StopTimer()
  }
  const HandleFail = (clickedBtnId: number, answer: number) => {
    dispatch(setResult("fail"))
    dispatch(setCorrectAnswer(correctAnswer))
    dispatch(setWrongAnswer(answer))
    resetDifficulty()
    dispatch(setStageState("finished"))
    dispatch(setBtnId(clickedBtnId))
    StopTimer()
    UpdateUserScore()

  }


  return {
    HandleSuccess, HandleFail, stageTime
  }

}
