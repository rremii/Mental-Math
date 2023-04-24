import { IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class AuthResponse {
  @IsString()
  accessToken: string
}
