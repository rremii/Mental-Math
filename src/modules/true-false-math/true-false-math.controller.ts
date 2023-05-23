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
import { TrueFalseMathService } from "./true-false-math.service"
import { AccessTokenGuard } from "../../guards/access-token.guard"
import { DefaultResponse } from "../../common/types/types"
import { UpdateScoreDto } from "./dto/update-score.dto"
import { User } from "../users/entities/user.entity"

@Controller("true-false-math")
export class TrueFalseMathController {
  constructor(private readonly trueFalseMathService: TrueFalseMathService) {}

  @Put("result")
  @UsePipes(new ValidationPipe())
  @UseGuards(AccessTokenGuard)
  updateScoreById(
    @Body() updateScoreDto: UpdateScoreDto,
  ): Promise<DefaultResponse> {
    return this.trueFalseMathService.updateScoreById(updateScoreDto)
  }

  @Get("best/:limit")
  @UseGuards(AccessTokenGuard)
  @UsePipes(new ParseIntPipe())
  getBestsUsers(@Param("limit") limit: number): Promise<User[]> {
    return this.trueFalseMathService.getBestsUsers(limit)
  }

  // @Get("result/:id")
  // // @UseGuards(AccessTokenGuard)
  // getScoreById(@Param("id") userId: number) {
  //   return this.quickMathService.getScoreById(userId)
  // }
}
