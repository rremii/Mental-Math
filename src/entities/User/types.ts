export interface User {
  id: number
  userName: string
  email: string
  password: string
  avatar: string
  refreshToken: string
}

export interface DefaultResponse {
  message: string
}

export interface ChangeNameDto {
  id: number
  newName: string
}
