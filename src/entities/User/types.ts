import { Avatars } from "@entities/Avatar/model/types"

export interface User {
  id: number
  userName: string
  email: string
  password: string
  avatar: Avatars
  refreshToken: string
}

export interface DefaultResponse {
  message: string
}

export interface ChangeNameDto {
  id: number
  newName: string
}

export interface ChangeAvatarDto {
  id: number
  newAvatar: string
}

export interface GameResults {
  quickMathScore: number
  hardMathScore: number
  inputMathScore: number
  trueFalseMathScore: number
}
