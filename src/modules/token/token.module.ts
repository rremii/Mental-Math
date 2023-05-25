import { Module } from "@nestjs/common"
import { TokenService } from "./token.service"
import { JwtModule, JwtService } from "@nestjs/jwt"
import { UsersService } from "../users/users.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import { User } from "../users/entities/user.entity"
import { QuickMath } from "../quick-math/entities/quick-math.entity"
import { QuickMathService } from "../quick-math/quick-math.service"
import { HardMath } from "../hard-math/entities/hard-math.entity"
import { HardMathService } from "../hard-math/hard-math.service"
import { InputMathService } from "../input-math/input-math.service"
import { InputMath } from "../input-math/entities/input-math.entity"
import { TrueFalseMathService } from "../true-false-math/true-false-math.service"
import { TrueFalseMath } from "../true-false-math/entities/true-false-math.entity"
import { BalanceMathService } from "../balance-math/balance-math.service"
import { BalanceMath } from "../balance-math/entities/balance-math.entity"

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      QuickMath,
      HardMath,
      InputMath,
      TrueFalseMath,
      BalanceMath,
    ]),
    JwtModule,
  ],
  providers: [
    TokenService,
    JwtService,
    UsersService,
    QuickMathService,
    HardMathService,
    InputMathService,
    TrueFalseMathService,
    BalanceMathService,
  ],
  exports: [TokenService, JwtService, UsersService],
})
export class TokenModule {}
