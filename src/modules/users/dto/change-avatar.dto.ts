import {
  ArrayNotEmpty,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class ChangeAvatarDto {
  @IsNotEmpty()
  @IsNumber()
  id: number

  @IsNotEmpty()
  @IsString()
  newAvatar: string
}
