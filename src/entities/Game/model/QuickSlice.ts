import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "@shared/store/ReduxStore"


interface initialStateType {
  quickAnswers: string[] | number[]
  quickEquation: string
  quickCorrectAnswer: number | null
  quickWrongAnswer: number | null
}

const initialState = {
  quickAnswers: ["", "", "", ""],
  quickEquation: "",
  quickWrongAnswer: null,
  quickCorrectAnswer: null
} as initialStateType

const QuickSlice = createSlice({
  name: "QuickSlice",
  initialState,
  reducers: {
    setQuickAnswers(state, action: PayloadAction<number[]>) {
      state.quickAnswers = action.payload
    },
    setQuickCorrect(state, action: PayloadAction<number | null>) {
      state.quickCorrectAnswer = action.payload
    },
    setQuickWrong(state, action: PayloadAction<number | null>) {
      state.quickWrongAnswer = action.payload
    },
    setQuickEquation(state, action: PayloadAction<string>) {
      state.quickEquation = action.payload
    },
    clearQuickAnswers(state) {
      state.quickAnswers = ["", "", "", ""]
    }
  }
})
export const {
  setQuickAnswers, setQuickCorrect, clearQuickAnswers, setQuickWrong, setQuickEquation
}
  = QuickSlice.actions
export const QuickReducer = QuickSlice.reducer



