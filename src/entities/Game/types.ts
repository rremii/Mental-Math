import { User } from "@entities/User"

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


export type IQuickMath = MathGame

export type IHardMath = MathGame

export type IInputMath = MathGame

export type ITrueFalseMath = MathGame

export type IBalanceMath = MathGame


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

export interface UserBalanceMath extends User {
  balanceMath: IBalanceMath
}
