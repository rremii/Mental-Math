import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface initialStateType {
  isAvatarMenuOpen: boolean

}

const initialState = {
  isAvatarMenuOpen: false
} as initialStateType

const AvatarMenuSlice = createSlice({
  name: "AvatarMenuSlice",
  initialState,
  reducers: {
    setAvatarMenuOpen(state, action: PayloadAction<boolean>) {
      state.isAvatarMenuOpen = action.payload
    }
  }
})
export const { setAvatarMenuOpen } = AvatarMenuSlice.actions
export const AvatarMenuReducer = AvatarMenuSlice.reducer
