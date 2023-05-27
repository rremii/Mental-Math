import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface initialStateType {
  trueFalseAnswers: ["true", "false"]
  trueFalseEquation: string
  trueFalseCorrectAnswer: number | null
  trueFalseCurrentAnswer: number | null
  // trueFalseWrongAnswer: "greater" | "smaller" | null
}

const initialState = {
  trueFalseCorrectAnswer: null,
  trueFalseAnswers: ["true", "false"],
  trueFalseEquation: "",
  trueFalseCurrentAnswer: null
} as initialStateType

const TrueFalseSlice = createSlice({
  name: "TrueFalseSlice",
  initialState,
  reducers: {
    clearTrueFalseAnswers(state) {
      state.trueFalseCorrectAnswer = null
    },
    setTrueFalseCurrent(state, action: PayloadAction<number | null>) {
      state.trueFalseCurrentAnswer = action.payload
    },
    setTrueFalseCorrect(state, action: PayloadAction<number | null>) {
      state.trueFalseCorrectAnswer = action.payload
    },
    setTrueFalseEquation(state, action: PayloadAction<string>) {
      state.trueFalseEquation = action.payload
    }
  }
})
export const {
  setTrueFalseCorrect, setTrueFalseEquation,
  clearTrueFalseAnswers, setTrueFalseCurrent
}
  = TrueFalseSlice.actions
export const TrueFalseReducer = TrueFalseSlice.reducer
