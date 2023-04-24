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

export class ChangeNameDto {
  @IsNotEmpty()
  @IsNumber()
  id: number

  @IsNotEmpty()
  @IsString()
  newName: string
}
