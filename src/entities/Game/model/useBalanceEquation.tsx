import {
  MultiplyChance,
  setBalanceCorrect,
  setBalanceEquations,
  setBtnId,
  setDifficulty,
  setMulDifficulty,
  setResult,
  setStage,
  setStageState,
  StageTimeGap,
  useUpdateBalanceMathScoreMutation,
  VariablePlaceSide
} from "@entities/Game"
import { SolveEquation } from "@shared/helpers/SolveEquation"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { CreateHardMultiplyEquation } from "@entities/Game/helpers/CreateHardMultiplyEquation"
import { CreateHardEquation } from "@entities/Game/helpers/CreateHardEquation"
import { useEffect } from "react"
import { useTimer } from "@shared/Hooks/useTimer"
import { useGetUserQuery } from "@entities/User"

const IsMultiply = () => {
  const random = Math.random()
  return random < MultiplyChance
}


export const useBalanceEquation = (StageTime:number) => {
  const dispatch = useAppDispatch()

  const stage = useTypedSelector(state => state.Stage.stage)
  const result = useTypedSelector(state => state.Stage.result)
  const stageState = useTypedSelector(state => state.Stage.stageState)
  const balanceCorrect = useTypedSelector(state => state.Balance.balanceCorrectAnswer)
  const mulDifficulty = useTypedSelector(state => state.Stage.mulDifficulty)
  const difficulty = useTypedSelector(state => state.Stage.difficulty)


  const {
    Start: StartTimer,
    Stop: StopTimer,
    Reset: ResetTime,
    time: stageTime,
    timerState
  } = useTimer(StageTime, StageTimeGap)
  const [updateBalanceMathScore] = useUpdateBalanceMathScoreMutation()
  const { data: user } = useGetUserQuery()

  const UpdateUserScore = () => {
    if (!user) return
    updateBalanceMathScore({ newScore: stage, userId: user.id })
  }

  const ResetDifficulty = () => {
    dispatch(setDifficulty(1))
    dispatch(setMulDifficulty(1))
  }

  const GetEquation = (): string => {
    let equation = ""
    if (IsMultiply()) {
      equation = CreateHardMultiplyEquation(mulDifficulty, VariablePlaceSide.rightSide)
      dispatch(setMulDifficulty(difficulty + 1))
    } else {
      equation = CreateHardEquation(difficulty, VariablePlaceSide.rightSide)
      dispatch(setDifficulty(difficulty + 1))
    }
    return equation
  }

  const UpdateEquation = (): void => {
    let answer1: number
    let answer2: number
    let equation1 = ""
    let equation2 = ""

    do {
      equation1 = GetEquation()
      equation2 = GetEquation()

      answer1 = SolveEquation(equation1)
      answer2 = SolveEquation(equation2)
    } while (answer1 === answer2)

    let equalId1 = 0
    let equalId2 = 0
    equation1.split("").forEach((el, i) => {
      if (el === "=") equalId1 = i
    })
    equation2.split("").forEach((el, i) => {
      if (el === "=") equalId2 = i
    })

    dispatch(setBalanceEquations([equation1.slice(0, equalId1), equation2.slice(0, equalId2)]))

    if (answer1 > answer2) {
      dispatch(setBalanceCorrect("greater"))
    } else {
      dispatch(setBalanceCorrect("smaller"))
    }
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
    dispatch(setBalanceCorrect(balanceCorrect))
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
      dispatch(setBalanceCorrect(balanceCorrect))
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

  return {  HandleFail, HandleSuccess, stageTime }


}
