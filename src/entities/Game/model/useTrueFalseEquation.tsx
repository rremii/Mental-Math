import {
  MultiplyChance,
  setBtnId,
  setDifficulty,
  setMulDifficulty,
  setResult,
  setStage,
  setStageState,
  StageTimeGap,
  useUpdateTrueFalseMathScoreMutation,
  VariablePlaceSide
} from "@entities/Game"
import { SolveEquation } from "@shared/helpers/SolveEquation"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { CreateHardMultiplyEquation } from "@entities/Game/helpers/CreateHardMultiplyEquation"
import { CreateHardEquation } from "@entities/Game/helpers/CreateHardEquation"
import { useEffect } from "react"
import { useTimer } from "@shared/Hooks/useTimer"
import { useGetUserQuery } from "@entities/User"
import { GetAnswersArr } from "@shared/helpers/GetAnswersArr"
import { setTrueFalseCorrect, setTrueFalseCurrent, setTrueFalseEquation } from "@entities/Game/model/TrueFalseSlice"

const IsMultiply = () => {
  const random = Math.random()
  return random < MultiplyChance
}


export const useTrueFalseEquation = (StageTime: number) => {
  const dispatch = useAppDispatch()

  const stage = useTypedSelector(state => state.Stage.stage)
  const result = useTypedSelector(state => state.Stage.result)
  const stageState = useTypedSelector(state => state.Stage.stageState)
  const trueFalseCorrect = useTypedSelector(state => state.TrueFalse.trueFalseCorrectAnswer)
  const mulDifficulty = useTypedSelector(state => state.Stage.mulDifficulty)
  const difficulty = useTypedSelector(state => state.Stage.difficulty)


  const {
    Start: StartTimer,
    Stop: StopTimer,
    Reset: ResetTime,
    time: stageTime,
    timerState
  } = useTimer(StageTime, StageTimeGap)
  const [updateTrueFalseMathScore] = useUpdateTrueFalseMathScoreMutation()
  const { data: user } = useGetUserQuery()

  const UpdateUserScore = () => {
    if (!user) return
    updateTrueFalseMathScore({ newScore: stage, userId: user.id })
  }

  const ResetDifficulty = () => {
    dispatch(setDifficulty(1))
    dispatch(setMulDifficulty(1))
  }


  const GetEquation = (): string => {
    let equation = ""
    if (IsMultiply()) {
      equation = CreateHardMultiplyEquation(mulDifficulty, VariablePlaceSide.random)
      dispatch(setMulDifficulty(difficulty + 1))
    } else {
      equation = CreateHardEquation(difficulty, VariablePlaceSide.random)
      dispatch(setDifficulty(difficulty + 1))
    }
    return equation
  }

  const UpdateEquation = (): void => {
    let equation = GetEquation()
    dispatch(setTrueFalseEquation(equation))

    const correctAnswer = SolveEquation(equation)
    const answers = GetAnswersArr(correctAnswer, 2)

    dispatch(setTrueFalseCorrect(correctAnswer))
    dispatch(setTrueFalseCurrent(answers[0]))
  }


  const HandleSuccess = (clickedBtnId?: number) => {
    dispatch(setResult("success"))
    dispatch(setStage((stage + 1)))
    dispatch(setStageState("finished"))
    if (clickedBtnId || clickedBtnId === 0) dispatch(setBtnId(clickedBtnId))
    StopTimer()
  }
  const HandleFail = (clickedBtnId?: number) => {
    dispatch(setResult("fail"))
    dispatch(setTrueFalseCorrect(trueFalseCorrect))
    ResetDifficulty()
    dispatch(setStageState("finished"))
    if (clickedBtnId || clickedBtnId === 0) dispatch(setBtnId(clickedBtnId))
    StopTimer()
    UpdateUserScore()
  }


  useEffect(() => {
    if (timerState === "timeout") {
      dispatch(setResult("fail"))
      dispatch(setStageState("finished"))
      dispatch(setTrueFalseCorrect(trueFalseCorrect))
      ResetDifficulty()
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
