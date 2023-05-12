import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common"
import { UsersService } from "../users/users.service"
import { QuickMathService } from "./quick-math.service"
import { AccessTokenGuard } from "../../guards/access-token.guard"
import { ChangeNameDto } from "../users/dto/change-name.dto"
import { DefaultResponse } from "../../common/types/types"
import { UpdateScoreDto } from "./dto/update-score.dto"

@Controller("quick-math")
export class QuickMathController {
  constructor(private readonly quickMathService: QuickMathService) {}

  // @Post("name")
  // @UseGuards(AccessTokenGuard)
  // @UsePipes(new ValidationPipe())
  // changeName(@Body() changeNameDto: ChangeNameDto): Promise<DefaultResponse> {
  //   return this.usersService.changeName(changeNameDto)
  // }

  @Post()
  // @UseGuards(AccessTokenGuard)
  @UsePipes(new ValidationPipe())
  updateScoreById(
    @Body("") updateScoreDto: UpdateScoreDto,
  ): Promise<DefaultResponse> {
    return this.quickMathService.updateScoreById(updateScoreDto)
  }

  @Get("bests")
  // @UseGuards(AccessTokenGuard)
  getBestsUsers() {
    return this.quickMathService.getBestsUsers()
  }

  @Get(":id")
  // @UseGuards(AccessTokenGuard)
  getScoreById(@Param("id") userId: number) {
    return this.quickMathService.getScoreById(userId)
  }
}
