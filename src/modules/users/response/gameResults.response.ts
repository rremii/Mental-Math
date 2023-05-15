import { IsNumber } from "class-validator"

export class GameResultsResponse {
  @IsNumber()
  quickMathScore: number
}
