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
import { BalanceMathService } from "./balance-math.service"
import { AccessTokenGuard } from "../../guards/access-token.guard"
import { DefaultResponse } from "../../common/types/types"
import { UpdateScoreDto } from "./dto/update-score.dto"
import { User } from "../users/entities/user.entity"

@Controller("balance-math")
export class BalanceMathController {
  constructor(private readonly balanceMathService: BalanceMathService) {}

  @Put("result")
  @UsePipes(new ValidationPipe())
  @UseGuards(AccessTokenGuard)
  updateScoreById(
    @Body() updateScoreDto: UpdateScoreDto,
  ): Promise<DefaultResponse> {
    return this.balanceMathService.updateScoreById(updateScoreDto)
  }

  @Get("best/:limit")
  @UseGuards(AccessTokenGuard)
  @UsePipes(new ParseIntPipe())
  getBestsUsers(@Param("limit") limit: number): Promise<User[]> {
    return this.balanceMathService.getBestsUsers(limit)
  }

  // @Get("result/:id")
  // // @UseGuards(AccessTokenGuard)
  // getScoreById(@Param("id") userId: number) {
  //   return this.quickMathService.getScoreById(userId)
  // }
}
