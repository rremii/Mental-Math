import { useEffect } from "react"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { useTimer } from "@shared/Hooks/useTimer"
import { PreStartGap, PreStartTime, setStageState } from "@entities/Game"

export const useIsPreStart = () => {
  const dispatch = useAppDispatch()

  const stageState = useTypedSelector(state => state.Game.stageState)

  const { Start, time, timerState } = useTimer(PreStartTime, PreStartGap)


  useEffect(() => {

    if (timerState === "timeout") dispatch(setStageState("running"))

    if (stageState === "preStart") Start()

  }, [timerState])

  return { time }


}