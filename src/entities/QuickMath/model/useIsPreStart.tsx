import { useEffect } from "react"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { useTimer } from "@entities/QuickMath/model/useTimer"
import { setStageState } from "@entities/QuickMath"
import { PreStartGap, PreStartTime } from "@entities/QuickMath/constants"

export const useIsPreStart = () => {
  const dispatch = useAppDispatch()

  const stageState = useTypedSelector(state => state.QuickMath.stageState)

  const { Start, time, timerState } = useTimer(PreStartTime, PreStartGap)


  useEffect(() => {
    
    if (timerState === "timeout") dispatch(setStageState("running"))

    if (stageState === "preStart") Start()

  }, [timerState])

  return { time }


}
