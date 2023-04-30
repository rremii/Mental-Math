import { Avatars } from "@entities/Avatar/model/types"

export type AuthResponse = {
  accessToken: string
}




export type RegisterDto = {
  email: string
  password: string
  userName: string
  avatar: Avatars
}
export type LoginDto = {
  email: string
  password: string
}
