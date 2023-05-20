import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common"
import { UsersService } from "../users/users.service"
import { HardMathService } from "./hard-math.service"
import { AccessTokenGuard } from "../../guards/access-token.guard"
import { ChangeNameDto } from "../users/dto/change-name.dto"
import { DefaultResponse } from "../../common/types/types"
import { UpdateScoreDto } from "./dto/update-score.dto"
import { User } from "../users/entities/user.entity"

@Controller("hard-math")
export class HardMathController {
  constructor(private readonly hardMathService: HardMathService) {}

  @Put("result")
  @UsePipes(new ValidationPipe())
  @UseGuards(AccessTokenGuard)
  updateScoreById(
    @Body() updateScoreDto: UpdateScoreDto,
  ): Promise<DefaultResponse> {
    return this.hardMathService.updateScoreById(updateScoreDto)
  }

  @Get("best/:limit")
  @UseGuards(AccessTokenGuard)
  @UsePipes(new ParseIntPipe())
  getBestsUsers(@Param("limit") limit: number): Promise<User[]> {
    return this.hardMathService.getBestsUsers(limit)
  }

  // @Get("result/:id")
  // // @UseGuards(AccessTokenGuard)
  // getScoreById(@Param("id") userId: number) {
  //   return this.quickMathService.getScoreById(userId)
  // }
}
