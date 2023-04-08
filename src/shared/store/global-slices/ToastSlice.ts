import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface initialState {
  isShown: boolean
}

const initialState = {
  isShown: true
} as initialState

export const ToastSlice = createSlice({
  name: "ToastSlice",
  initialState,
  reducers: {}


})

export const {} = ToastSlice.actions

export const ToastReducer = ToastSlice.reducer
