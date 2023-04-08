import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface initialState {
  loginError: string
}

const initialState = {
  loginError: ""
} as initialState

export const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    setLoginError: (state, action: PayloadAction<string>) => {
      state.loginError = action.payload
    },
    clearLoginError: (state) => {
      state.loginError = ""
    }

  }


})

export const { setLoginError, clearLoginError } = AuthSlice.actions

export const AuthReducer = AuthSlice.reducer
