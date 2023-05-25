import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common"
import { UsersService } from "./users.service"
import { UsersController } from "./users.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { User } from "./entities/user.entity"
import { TokenModule } from "../token/token.module"
import { TokenService } from "../token/token.service"
import { JwtModule } from "@nestjs/jwt"
import { QuickMath } from "../quick-math/entities/quick-math.entity"
import { QuickMathModule } from "../quick-math/quick-math.module"
import { QuickMathService } from "../quick-math/quick-math.service"
import { HardMathService } from "../hard-math/hard-math.service"
import { HardMath } from "../hard-math/entities/hard-math.entity"
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
    TokenModule,
    // QuickMathModule,
  ],
  exports: [TypeOrmModule, UsersService],
  providers: [
    UsersService,
    QuickMathService,
    TokenService,
    HardMathService,
    InputMathService,
    TrueFalseMathService,
    BalanceMathService,
  ],
  controllers: [UsersController],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes(UsersController)
  }
}
