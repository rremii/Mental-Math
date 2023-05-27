import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface initialStateType {
  hardAnswers: string[] | number[]
  hardEquation: string
  hardCorrectAnswer: number | null
  hardWrongAnswer: number | null
}

const initialState = {
  hardAnswers: ["", "", "", ""],
  hardEquation: "",
  hardWrongAnswer: null,
  hardCorrectAnswer: null
} as initialStateType

const HardSlice = createSlice({
  name: "HardSlice",
  initialState,
  reducers: {
    setHardAnswers(state, action: PayloadAction<number[]>) {
      state.hardAnswers = action.payload
    },
    setHardCorrect(state, action: PayloadAction<number | null>) {
      state.hardCorrectAnswer = action.payload
    },
    setHardWrong(state, action: PayloadAction<number | null>) {
      state.hardWrongAnswer = action.payload
    },
    setHardEquation(state, action: PayloadAction<string>) {
      state.hardEquation = action.payload
    },
    clearHardAnswers(state) {
      state.hardAnswers = ["", "", "", ""]
    }
  }
})
export const {
  setHardAnswers, setHardCorrect, clearHardAnswers, setHardWrong, setHardEquation
}
  = HardSlice.actions
export const HardReducer = HardSlice.reducer
