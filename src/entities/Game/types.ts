import { User } from "@entities/User/types"

export type resultType = "initial" | "success" | "fail"
export type stageType = "preStart" | "running" | "finished"

interface MathGame {
  id: number
  score: number
}

export enum VariablePlaceSide {
  leftSide = 0,
  rightSide = 1,
  random = 0.5,
}


export interface IQuickMath extends MathGame {
}

export interface IHardMath extends MathGame {
}

export interface IInputMath extends MathGame {
}

export interface ITrueFalseMath extends MathGame {
}


export interface UserQuickMath extends User {
  quickMath: IQuickMath
}

export interface UserHardMath extends User {
  hardMath: IHardMath
}

export interface UserInputMath extends User {
  inputMath: IInputMath
}

export interface UserTrueFalseMath extends User {
  trueFalseMath: ITrueFalseMath
}
