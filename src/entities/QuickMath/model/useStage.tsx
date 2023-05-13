import { useEffect } from "react"
import { MultiplyChance, StageTime, StageTimeGap } from "@entities/QuickMath/constants"
import { SolveEquation } from "../helpers/SolveEquation"
import { CreateEquation } from "../helpers/CreateEquation"
import { CreateMultiplyEquation } from "../helpers/CreateMultiplyEquation"
import { GetAnswersArr } from "@entities/QuickMath/helpers/GetAnswersArr"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import {
  setAnswers,
  setBtnId,
  setCorrectAnswer,
  setDifficulty,
  setEquation,
  setMulDifficulty,
  setResult,
  setStage,
  setStageState,
  setWrongAnswer, useUpdateQuickMathScoreMutation
} from "@entities/QuickMath"
import { useTimer } from "@entities/QuickMath/model/useTimer"
import { useGetUserQuery } from "@entities/User"


const IsMultiply = () => {
  const random = Math.random()
  return random < MultiplyChance
}

export const useStage = () => {
  const dispatch = useAppDispatch()

  const mulDifficulty = useTypedSelector(state => state.QuickMath.mulDifficulty)
  const stage = useTypedSelector(state => state.QuickMath.stage)
  const difficulty = useTypedSelector(state => state.QuickMath.difficulty)
  const result = useTypedSelector(state => state.QuickMath.result)
  const stageState = useTypedSelector(state => state.QuickMath.stageState)
  const correctAnswer = useTypedSelector(state => state.QuickMath.correctAnswer)


  const {
    Start: StartTimer,
    Stop: StopTimer,
    Reset: ResetTime,
    time: stageTime,
    timerState
  } = useTimer(StageTime, StageTimeGap)

  const [updateQuickMathScore] = useUpdateQuickMathScoreMutation()
  const { data: user } = useGetUserQuery()

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

  const updateEquation = (): void => {
    let equation = ""
    if (IsMultiply()) {
      equation = CreateMultiplyEquation(mulDifficulty)
      dispatch(setMulDifficulty(difficulty + 1))
    } else {
      equation = CreateEquation(difficulty)
      dispatch(setDifficulty(difficulty + 1))
    }
    dispatch(setEquation(equation))

    const answer = SolveEquation(equation)
    dispatch(setCorrectAnswer(answer))
    const answers = GetAnswersArr(answer)
    dispatch(setAnswers(answers))
  }
  const resetDifficulty = () => {
    dispatch(setDifficulty(1))
    dispatch(setMulDifficulty(1))
  }

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
