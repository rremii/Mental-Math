import { Module } from "@nestjs/common"
import { AuthController } from "./auth.controller"
import { AuthService } from "./auth.service"
import { UsersService } from "../users/users.service"
import { UsersModule } from "../users/users.module"
import { TokenModule } from "../token/token.module"
import { TokenService } from "../token/token.service"
import { JwtModule, JwtService } from "@nestjs/jwt"
import { AccessTokenStrategy } from "../../strategy/access-token.strategy"
import { RefreshTokenStrategy } from "../../strategy/refresh-token.strategy"
import { QuickMathService } from "../quick-math/quick-math.service"
import { HardMathService } from "../hard-math/hard-math.service"

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
  ],
})
export class AuthModule {}
