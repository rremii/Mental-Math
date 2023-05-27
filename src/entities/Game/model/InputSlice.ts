import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface initialStateType {
  inputAnswers: string[] | number[]
  inputEquation: string
  inputCorrectAnswer: number | null
  inputWrongAnswer: number | null
}

const initialState = {
  inputAnswers: ["", "", "", ""],
  inputEquation: "",
  inputWrongAnswer: null,
  inputCorrectAnswer: null
} as initialStateType

const InputSlice = createSlice({
  name: "InputSlice",
  initialState,
  reducers: {
    setInputAnswers(state, action: PayloadAction<number[]>) {
      state.inputAnswers = action.payload
    },
    setInputCorrect(state, action: PayloadAction<number | null>) {
      state.inputCorrectAnswer = action.payload
    },
    setInputWrong(state, action: PayloadAction<number | null>) {
      state.inputWrongAnswer = action.payload
    },
    setInputEquation(state, action: PayloadAction<string>) {
      state.inputEquation = action.payload
    },
    clearInputAnswers(state) {
      state.inputAnswers = ["", "", "", ""]
    }
  }
})
export const {
  setInputAnswers, setInputCorrect, clearInputAnswers, setInputWrong, setInputEquation
}
  = InputSlice.actions
export const InputReducer = InputSlice.reducer
