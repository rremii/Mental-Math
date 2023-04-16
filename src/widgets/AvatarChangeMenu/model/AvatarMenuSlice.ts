import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Avatars } from "@widgets/AvatarChangeMenu/model/types"


interface initialStateType {
  isAvatarMenuOpen: boolean
  avatar: Avatars
}

const initialState = {
  isAvatarMenuOpen: false,
  avatar: "noAvatar"
} as initialStateType

const AvatarMenuSlice = createSlice({
  name: "AvatarMenuSlice",
  initialState,
  reducers: {
    setAvatarMenuOpen(state, action: PayloadAction<boolean>) {
      state.isAvatarMenuOpen = action.payload
    },
    setAvatar(state, action: PayloadAction<Avatars>) {
      state.avatar = action.payload
    }
  }
})
export const { setAvatarMenuOpen, setAvatar } = AvatarMenuSlice.actions
export const AvatarMenuReducer = AvatarMenuSlice.reducer
