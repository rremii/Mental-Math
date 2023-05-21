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
import { QuickMathService } from "./quick-math.service"
import { AccessTokenGuard } from "../../guards/access-token.guard"
import { DefaultResponse } from "../../common/types/types"
import { UpdateScoreDto } from "./dto/update-score.dto"
import { User } from "../users/entities/user.entity"

@Controller("quick-math")
export class QuickMathController {
  constructor(private readonly quickMathService: QuickMathService) {}

  @Put("result")
  @UsePipes(new ValidationPipe())
  @UseGuards(AccessTokenGuard)
  updateScoreById(
    @Body() updateScoreDto: UpdateScoreDto,
  ): Promise<DefaultResponse> {
    return this.quickMathService.updateScoreById(updateScoreDto)
  }

  @Get("best/:limit")
  @UseGuards(AccessTokenGuard)
  @UsePipes(new ParseIntPipe())
  getBestsUsers(@Param("limit") limit: number): Promise<User[]> {
    return this.quickMathService.getBestsUsers(limit)
  }

  // @Get("result/:id")
  // // @UseGuards(AccessTokenGuard)
  // getScoreById(@Param("id") userId: number) {
  //   return this.quickMathService.getScoreById(userId)
  // }
}
