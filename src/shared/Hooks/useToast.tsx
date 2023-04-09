import React, { createElement, useEffect } from "react"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { clearMessage, hideToast, showToast } from "@shared/store/global-slices/ToastSlice"
import { clearTimeout } from "timers"


export const useToast = (duration: number) => {
  const dispatch = useAppDispatch()

  const isShown = useTypedSelector(state => state.Toast.isShown)

  useEffect(() => {

    const hideTimer = setTimeout(() => {
      dispatch(hideToast())
    }, duration)
    const clearTimer = setTimeout(() => {
      dispatch(clearMessage())
    }, duration + 1000)

    return () => {
      window.clearTimeout(hideTimer)
      window.clearTimeout(clearTimer)
    }

  }, [isShown])

  const ShowToast = (message: string) => {
    dispatch(showToast(message))
  }

  return {
    ShowToast
  }


}
