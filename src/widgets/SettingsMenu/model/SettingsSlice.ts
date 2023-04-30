import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface initialStateType {
  isSettingsMenuOpen: boolean
  isDarkMode: boolean
}

const initialState = {
  isSettingsMenuOpen: false,
  isDarkMode: true
} as initialStateType

const SettingsSlice = createSlice({
  name: "SettingsSlice",
  initialState,
  reducers: {
    setSettingsMenu(state, action: PayloadAction<boolean>) {
      state.isSettingsMenuOpen = action.payload
    },
    setDarkMode(state, action: PayloadAction<boolean>) {
      state.isDarkMode = action.payload
    }
  }
})
export const { setSettingsMenu, setDarkMode } = SettingsSlice.actions
export const SettingsMenuReducer = SettingsSlice.reducer
