import { useEffect } from "react"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { setDarkMode } from "@entities/Settings/model/SettingsSlice"
import { DarkTheme, LightTheme } from "@entities/Settings/constants"
import { SetStyleProperty } from "@entities/Settings/helpers"


export const useChangeTheme = () => {
  const dispatch = useAppDispatch()

  const isDarkMode = useTypedSelector(state => state.SettingsMenu.isDarkMode)


  const ChangeTheme = () => {
    console.log(isDarkMode)
    if (isDarkMode)
      DarkTheme.forEach(({ property, value }) => {
        SetStyleProperty(property, value)
      })
    if (!isDarkMode) {
      LightTheme.forEach(({ property, value }) => {
        SetStyleProperty(property, value)
      })
    }

  }

  useEffect(() => {
    console.log("useEffect")
    ChangeTheme()
  }, [isDarkMode])

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode")
    if (isDarkMode) {
      dispatch(setDarkMode(isDarkMode === "true"))
    }
  }, [])


}
