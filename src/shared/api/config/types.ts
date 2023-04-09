export interface ApiError {
  message: string
  name: string
  options: {}
  response: { statusCode: number, message: string, error: string }
  status: number
}

