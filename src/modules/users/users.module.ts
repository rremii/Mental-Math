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

@Module({
  imports: [
    TypeOrmModule.forFeature([User, QuickMath, HardMath]),
    JwtModule,
    QuickMathModule,
    TokenModule,
  ],
  exports: [TypeOrmModule, UsersService],
  providers: [UsersService, QuickMathService, TokenService, HardMathService],
  controllers: [UsersController],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes(UsersController)
  }
}
