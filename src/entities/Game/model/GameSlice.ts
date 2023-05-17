import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { resultType, stageType } from "../types"

// import { resultType, stageType } from "@entities/QuickMath/types"


interface initialStateType {


  correctAnswer: number | null

  wrongAnswer: number | null
  equation: string
  // answers: string[] | number[]

  quickAnswers: string[] | number[]
  hardAnswers: string[] | number[]
  balanceAnswers: "left" | "right"


  stage: number
  result: resultType
  stageState: stageType
  clickedBtnId: number | null
  difficulty: number
  mulDifficulty: number
}

const initialState = {
  clickedBtnId: null,
  result: "initial",
  stageState: "preStart",
  stage: 0,
  correctAnswer: null,
  wrongAnswer: null,
  // answers: ["", "", "", ""],

  quickAnswers: ["", "", "", ""],

  difficulty: 1,
  mulDifficulty: 1,
  equation: ""
} as initialStateType

const GameSlice = createSlice({
  name: "GameSlice",
  initialState,
  reducers: {
    setStage(state, action: PayloadAction<number>) {
      state.stage = action.payload
    },
    setStageState(state, action: PayloadAction<stageType>) {
      state.stageState = action.payload
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
    },
    //
    // setAnswers(state, action: PayloadAction<number[]>) {
    //   state.answers = action.payload
    // },
    setQuickAnswers(state, action: PayloadAction<number[]>) {
      state.quickAnswers = action.payload
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
      state.quickAnswers = ["", "", "", ""]
    }

  }
})
export const {
  clearAnswers,
  setStage, setStageState, setEquation, setMulDifficulty, setDifficulty,
  setWrongAnswer, setCorrectAnswer, setResult, setBtnId, setQuickAnswers
}
  = GameSlice.actions
export const GameReducer = GameSlice.reducer
