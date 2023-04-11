import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface initialState {
  loginError: string
  isLoggedIn: "first loading" | "success" | "rejected"
  isPending: boolean
}

const initialState = {
  loginError: "",
  isLoggedIn: "first loading",
  isPending: true
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
    },
    setAuthRejected(state) {
      state.isPending = false
      state.isLoggedIn = "rejected"
    },
    setAuthSuccess(state) {
      state.isPending = false
      state.isLoggedIn = "success"
    }


  }


})

export const { setLoginError, clearLoginError, setAuthRejected, setAuthSuccess } = AuthSlice.actions

export const AuthReducer = AuthSlice.reducer
