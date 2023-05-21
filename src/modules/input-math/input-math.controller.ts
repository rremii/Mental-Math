import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common"
import { InputMathService } from "./input-math.service"
import { AccessTokenGuard } from "../../guards/access-token.guard"
import { DefaultResponse } from "../../common/types/types"
import { UpdateScoreDto } from "./dto/update-score.dto"
import { User } from "../users/entities/user.entity"

@Controller("input-math")
export class InputMathController {
  constructor(private readonly inputMathService: InputMathService) {}

  @Put("result")
  @UsePipes(new ValidationPipe())
  @UseGuards(AccessTokenGuard)
  updateScoreById(
    @Body() updateScoreDto: UpdateScoreDto,
  ): Promise<DefaultResponse> {
    return this.inputMathService.updateScoreById(updateScoreDto)
  }

  @Get("best/:limit")
  @UseGuards(AccessTokenGuard)
  @UsePipes(new ParseIntPipe())
  getBestsUsers(@Param("limit") limit: number): Promise<User[]> {
    return this.inputMathService.getBestsUsers(limit)
  }

  // @Get("result/:id")
  // // @UseGuards(AccessTokenGuard)
  // getScoreById(@Param("id") userId: number) {
  //   return this.quickMathService.getScoreById(userId)
  // }
}
