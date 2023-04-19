import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Avatars } from "@widgets/AvatarChangeMenu/model/types"


interface initialStateType {
  isSettingsMenuOpen: boolean
}

const initialState = {
  isSettingsMenuOpen: false
} as initialStateType

const SettingsSlice = createSlice({
  name: "SettingsSlice",
  initialState,
  reducers: {
    setSettingsMenu(state, action: PayloadAction<boolean>) {
      state.isSettingsMenuOpen = action.payload
    }

  }
})
export const { setSettingsMenu } = SettingsSlice.actions
export const SettingsMenuReducer = SettingsSlice.reducer
