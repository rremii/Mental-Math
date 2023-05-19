import { useEffect } from "react"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import {
  Games,
  MultiplyChance,
  setBtnId,
  setCorrectAnswer,
  setDifficulty,
  setEquation,
  setMulDifficulty,
  setResult,
  setStage,
  setStageState,
  setWrongAnswer, StageTime, StageTimeGap,
  useUpdateQuickMathScoreMutation
} from "@entities/Game"
import { useTimer } from "@shared/Hooks/useTimer"
import { useGetUserQuery } from "@entities/User"
import { useQuickEquation } from "@entities/Game/model/useQuickEquation"
import { useHardEquation } from "@entities/Game/model/useHardEquation"


export const useStage = (game: Games) => {
  const dispatch = useAppDispatch()

  const stage = useTypedSelector(state => state.Game.stage)
  const result = useTypedSelector(state => state.Game.result)
  const stageState = useTypedSelector(state => state.Game.stageState)
  const correctAnswer = useTypedSelector(state => state.Game.correctAnswer)


  const {
    Start: StartTimer,
    Stop: StopTimer,
    Reset: ResetTime,
    time: stageTime,
    timerState
  } = useTimer(StageTime, StageTimeGap)
  const { updateEquation: updateQuickEquation } = useQuickEquation()
  const { updateEquation: updateHardEquation } = useHardEquation()

  const [updateQuickMathScore] = useUpdateQuickMathScoreMutation()
  const { data: user } = useGetUserQuery()

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

    let updateEquation: () => void

    switch (game) {
      case Games.quickMath:
        updateEquation = updateQuickEquation
        break
      case Games.hardMath:
        updateEquation = updateHardEquation
        break
      default:
        updateEquation = () => {
        }
    }


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

    if (!user) return
    updateQuickMathScore({ newScore: stage, userId: user.id })

  }


  return {
    HandleSuccess, HandleFail, stageTime
  }

}
