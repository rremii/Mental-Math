import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { resultType, stageType } from "../types"

// import { resultType, stageType } from "@entities/QuickMath/types"


interface initialStateType {

  stage: number
  result: resultType
  stageState: stageType
  clickedBtnId: number | null
}

const initialState = {
  clickedBtnId: null,
  result: "initial",
  stageState: "preStart",
  stage: 0,
  correctAnswer: null,
  wrongAnswer: null

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
    }

  }
})
export const {
  setStage, setStageState, setResult, setBtnId
}
  = StageSlice.actions
export const StageReducer = StageSlice.reducer
