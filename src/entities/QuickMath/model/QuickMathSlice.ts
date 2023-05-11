import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { resultType, stageType } from "@entities/QuickMath/types"


interface initialStateType {
  correctAnswer: number | null
  wrongAnswer: number | null
  stage: number
  result: resultType
  stageState: stageType
  clickedBtnId: number | null

  equation: string
  answers: string[] | number[]
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
  answers: ["", "", "", ""],
  difficulty: 1,
  mulDifficulty: 1,
  equation: ""
} as initialStateType

const QuickMathSlice = createSlice({
  name: "QuickMathSlice",
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
    setAnswers(state, action: PayloadAction<number[]>) {
      state.answers = action.payload
    },
    setEquation(state, action: PayloadAction<string>) {
      state.equation = action.payload
    },
    setDifficulty(state, action: PayloadAction<number>) {
      state.difficulty = action.payload
    },
    setMulDifficulty(state, action: PayloadAction<number>) {
      state.difficulty = action.payload
    }
  }
})
export const {
  setStage, setStageState, setEquation, setMulDifficulty, setDifficulty, setAnswers,
  setWrongAnswer, setCorrectAnswer, setResult, setBtnId
}
  = QuickMathSlice.actions
export const QuickMathReducer = QuickMathSlice.reducer
