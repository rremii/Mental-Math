import { CreateMultiplyEquation } from "@entities/Game/helpers/CreateMultiplyEquation"
import {
  MultiplyChance,
  setBtnId,
  setDifficulty,
  setMulDifficulty,
  setQuickAnswers,
  setQuickCorrect,
  setQuickEquation,
  setQuickWrong,
  setResult,
  setStage,
  setStageState,
  StageTimeGap,
  useUpdateQuickMathScoreMutation
} from "@entities/Game"
import { CreateEquation } from "@entities/Game/helpers/CreateEquation"
import { SolveEquation } from "@shared/helpers/SolveEquation"
import { GetAnswersArr } from "@shared/helpers/GetAnswersArr"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { useTimer } from "@shared/Hooks/useTimer"
import { useCallback, useEffect } from "react"
import { useGetUserQuery } from "@entities/User"

const IsMultiply = () => {
  const random = Math.random()
  return random < MultiplyChance
}

export const useQuickEquation = (StageTime: number, answersAmount?: number) => {
  const dispatch = useAppDispatch()

  const stage = useTypedSelector(state => state.Stage.stage)
  const result = useTypedSelector(state => state.Stage.result)
  const stageState = useTypedSelector(state => state.Stage.stageState)
  const quickCorrect = useTypedSelector(state => state.Quick.quickCorrectAnswer)
  const mulDifficulty = useTypedSelector(state => state.Stage.mulDifficulty)
  const difficulty = useTypedSelector(state => state.Stage.difficulty)

  const {
    Start: StartTimer,
    Stop: StopTimer,
    Reset: ResetTime,
    time: stageTime,
    timerState
  } = useTimer(StageTime, StageTimeGap)
  const [updateQuickMathScore] = useUpdateQuickMathScoreMutation()
  const { data: user } = useGetUserQuery()

  const UpdateUserScore = () => {
    if (!user) return
    updateQuickMathScore({ newScore: stage, userId: user.id })
  }

  const resetDifficulty = () => {
    dispatch(setDifficulty(1))
    dispatch(setMulDifficulty(1))
  }

  const UpdateEquation = (): void => {
    let equation = ""
    if (IsMultiply()) {
      equation = CreateMultiplyEquation(mulDifficulty)
      dispatch(setMulDifficulty(difficulty + 1))
    } else {
      equation = CreateEquation(difficulty)
      dispatch(setDifficulty(difficulty + 1))
    }
    dispatch(setQuickEquation(equation))
    const answer = SolveEquation(equation)
    dispatch(setQuickCorrect(answer))
    const answers = GetAnswersArr(answer, answersAmount)
    dispatch(setQuickAnswers(answers))
  }

  const HandleSuccess = (clickedBtnId?: number) => {
    dispatch(setResult("success"))
    dispatch(setStage((stage + 1)))
    dispatch(setStageState("finished"))
    if (clickedBtnId || clickedBtnId === 0) dispatch(setBtnId(clickedBtnId))
    StopTimer()
  }
  const HandleFail = (answer?: number, clickedBtnId?: number) => {
    dispatch(setResult("fail"))
    dispatch(setQuickCorrect(quickCorrect))
    if (answer || answer === 0) dispatch(setQuickWrong(answer))
    resetDifficulty()
    dispatch(setStageState("finished"))
    if (clickedBtnId || clickedBtnId === 0) dispatch(setBtnId(clickedBtnId))
    StopTimer()
    UpdateUserScore()
  }


  useEffect(() => {
    if (timerState === "timeout") {
      dispatch(setResult("fail"))
      dispatch(setStageState("finished"))
      dispatch(setQuickCorrect(quickCorrect))
      dispatch(setDifficulty(1))
      dispatch(setMulDifficulty(1))
      UpdateUserScore()
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

  return { HandleFail, HandleSuccess, stageTime }

}
