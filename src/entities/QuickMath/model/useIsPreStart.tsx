import { useEffect, useState } from "react"
import { useTypedSelector } from "@shared/Hooks/store-hooks"
import { useTimer } from "@entities/QuickMath/model/useTimer"

export const useIsPreStart = (initTime:number,timeGap:number) => {
  const stageState = useTypedSelector(state => state.QuickMath.stageState)

  const [isPreStart, setPreStart] = useState<boolean>(true)

  const { Start, time, timerState } = useTimer(initTime, timeGap)


  useEffect(() => {
    if (timerState === "timeout") setPreStart(false)

    if (stageState !== "preStart") return
    Start()

  }, [isPreStart, timerState])

  return { time, isPreStart }


}
