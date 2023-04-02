export type AuthResponse = {
  accessToken: string
}

export type AvatarTypes =
  "avatar1"
  | "avatar2"
  | "avatar3"
  | "avatar4"
  | "avatar5"
  | "avatar6"
  | "avatar7"
  | "avatar8"
  | "avatar9"


export type RegisterDto = {
  email: string
  password: string
  userName: string
  avatar: AvatarTypes
}
export type LoginDto = {
  email: string
  password: string
}
