import { useEffect } from "react"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { useTimer } from "@shared/Hooks/useTimer"
import { PreStartGap, PreStartTime } from "@entities/Game"
import { setStageState } from "./StageSlice"

export const useIsPreStart = () => {
  const dispatch = useAppDispatch()

  const stageState = useTypedSelector(state => state.Stage.stageState)

  const { Start, time, timerState } = useTimer(PreStartTime, PreStartGap)

  useEffect(() => {
    if (timerState === "timeout") dispatch(setStageState("running"))
    if (stageState === "preStart") Start()
  }, [timerState])

  return { time }
}
