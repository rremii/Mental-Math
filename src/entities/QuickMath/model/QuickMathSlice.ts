import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { resultType } from "@widgets/QuickMathMenu"


interface initialStateType {
  correctAnswer: number | null
  wrongAnswer: number | null
  stage: number
  result: resultType
  clickedBtnId: number | null
}

const initialState = {
  clickedBtnId: null,
  result: "initial",
  stage: 0,
  correctAnswer: null,
  wrongAnswer: null
} as initialStateType

const QuickMathSlice = createSlice({
  name: "QuickMathSlice",
  initialState,
  reducers: {
    setStage(state, action: PayloadAction<number>) {
      state.stage = action.payload
    },
    setResult(state, action: PayloadAction<resultType>) {
      state.result = action.payload
    },
    setBtnId(state, action: PayloadAction<number | null>) {
      state.clickedBtnId = action.payload
    },
    setCorrectAnswer(state, action: PayloadAction<number | null>) {
      state.correctAnswer = action.payload
    },
    setWrongAnswer(state, action: PayloadAction<number | null>) {
      state.wrongAnswer = action.payload
    }
  }
})
export const { setStage, setWrongAnswer, setCorrectAnswer, setResult, setBtnId } = QuickMathSlice.actions
export const QuickMathReducer = QuickMathSlice.reducer
