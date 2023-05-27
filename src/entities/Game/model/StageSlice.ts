import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { resultType, stageType } from "../types"


interface initialStateType {

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
  difficulty: 1,
  mulDifficulty: 1
} as initialStateType

const StageSlice = createSlice({
  name: "StageSlice",
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
    setDifficulty(state, action: PayloadAction<number>) {
      state.difficulty = action.payload
    },
    setMulDifficulty(state, action: PayloadAction<number>) {
      state.difficulty = action.payload
    }

  }
})
export const {
  setStage, setStageState, setResult, setBtnId, setMulDifficulty, setDifficulty
}
  = StageSlice.actions
export const StageReducer = StageSlice.reducer
