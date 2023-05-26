import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface initialStateType {

  correctAnswer: number | null
  wrongAnswer: number | null
  equation: string
  difficulty: number
  mulDifficulty: number

  // quickAnswers: string[] | number[]
  hardAnswers: string[] | number[]
  trueFalseAnswers: ["true", "false"]


}

const initialState = {
  correctAnswer: null,
  wrongAnswer: null,

  // quickAnswers: ["", "", "", ""],
  hardAnswers: ["", "", "", ""],
  trueFalseAnswers: ["true", "false"],


  difficulty: 1,
  mulDifficulty: 1,
  equation: ""
} as initialStateType

const GameSlice = createSlice({
  name: "GameSlice",
  initialState,
  reducers: {
    setCorrectAnswer(state, action: PayloadAction<number | null>) {
      state.correctAnswer = action.payload
    },
    setWrongAnswer(state, action: PayloadAction<number | null>) {
      state.wrongAnswer = action.payload
    },

    // setQuickAnswers(state, action: PayloadAction<number[]>) {
    //   state.quickAnswers = action.payload
    // },
    setHardAnswers(state, action: PayloadAction<number[]>) {
      state.hardAnswers = action.payload
    },

    setEquation(state, action: PayloadAction<string>) {
      state.equation = action.payload
    },
    setDifficulty(state, action: PayloadAction<number>) {
      state.difficulty = action.payload
    },
    setMulDifficulty(state, action: PayloadAction<number>) {
      state.difficulty = action.payload
    },
    clearAnswers(state) {
      // state.quickAnswers = ["", "", "", ""]
      state.hardAnswers = ["", "", "", ""]
    }


  }
})
export const {
  clearAnswers, setEquation, setMulDifficulty, setDifficulty,
  setWrongAnswer, setCorrectAnswer, setHardAnswers
}
  = GameSlice.actions
export const GameReducer = GameSlice.reducer
