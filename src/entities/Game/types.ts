import { User } from "@entities/User/types"

export type resultType = "initial" | "success" | "fail"
export type stageType = "preStart" | "running" | "finished"

export interface IQuickMath {
  id: number
  score: number
}

export interface IHardMath {
  id: number
  score: number
}

export enum Games {
  quickMath = "quick-math",
  hardMath = "hard-math",
  balance = "balance",
}

export interface UserQuickMath extends User {
  quickMath: IQuickMath
}

export interface UserHardMath extends User {
  hardMath: IHardMath
}
