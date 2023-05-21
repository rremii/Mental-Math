import { IsNotEmpty, IsNumber } from "class-validator"

export class UpdateScoreDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number

  @IsNotEmpty()
  @IsNumber()
  newScore: number
}
