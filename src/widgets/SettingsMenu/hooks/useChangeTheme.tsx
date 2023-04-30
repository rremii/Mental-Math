import { useLocalStorage } from "@shared/Hooks/useLocalStorage"
import { useEffect } from "react"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { setDarkMode } from "@widgets/SettingsMenu/model/SettingsSlice"
import { DarkTheme, LightTheme } from "@widgets/SettingsMenu/constants"
import { SetStyleProperty } from "@widgets/SettingsMenu/helpers"


export const useChangeTheme = () => {
  const dispatch = useAppDispatch()

  const isDarkMode = useTypedSelector(state => state.SettingsMenu.isDarkMode)


  const ChangeTheme = () => {

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
    ChangeTheme()
  }, [isDarkMode])

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode")
    if (isDarkMode) {
      dispatch(setDarkMode(isDarkMode === "true"))
    }
  }, [])


}
