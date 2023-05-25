import { Module } from "@nestjs/common"
import { AuthController } from "./auth.controller"
import { AuthService } from "./auth.service"
import { UsersService } from "../users/users.service"
import { UsersModule } from "../users/users.module"
import { TokenService } from "../token/token.service"
import { JwtModule, JwtService } from "@nestjs/jwt"
import { AccessTokenStrategy } from "../../strategy/access-token.strategy"
import { RefreshTokenStrategy } from "../../strategy/refresh-token.strategy"
import { QuickMathService } from "../quick-math/quick-math.service"
import { HardMathService } from "../hard-math/hard-math.service"
import { InputMathService } from "../input-math/input-math.service"
import { TrueFalseMathService } from "../true-false-math/true-false-math.service"
import { BalanceMathService } from "../balance-math/balance-math.service"

@Module({
  imports: [UsersModule, JwtModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    TokenService,
    JwtService,
    UsersService,
    AccessTokenStrategy,
    RefreshTokenStrategy,
    QuickMathService,
    HardMathService,
    InputMathService,
    TrueFalseMathService,
    BalanceMathService,
  ],
})
export class AuthModule {}
