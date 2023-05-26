import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface initialStateType {
  balanceAnswers: ["greater", "smaller"]
  balanceEquations: [string, string]
  balanceCorrectAnswer: "greater" | "smaller" | null
  // balanceWrongAnswer: "greater" | "smaller" | null
}

const initialState = {
  // balanceWrongAnswer: null,
  balanceCorrectAnswer: null,
  balanceAnswers: ["greater", "smaller"],
  balanceEquations: ["", ""]
} as initialStateType

const BalanceSlice = createSlice({
  name: "BalanceSlice",
  initialState,
  reducers: {
    clearBalanceAnswers(state) {
      // state.balanceWrongAnswer = null
      state.balanceCorrectAnswer = null
    },
    setBalanceCorrect(state, action: PayloadAction<"greater" | "smaller">) {
      state.balanceCorrectAnswer = action.payload
    },
    // setBalanceWrong(state, action: PayloadAction<"greater" | "smaller">) {
    //   state.balanceWrongAnswer = action.payload
    // },
    setBalanceEquations(state, action: PayloadAction<[string, string]>) {
      state.balanceEquations = action.payload
    }


  }
})
export const {
  setBalanceCorrect, setBalanceEquations,
  clearBalanceAnswers
}
  = BalanceSlice.actions
export const BalanceReducer = BalanceSlice.reducer
