import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { BalanceMath } from "./entities/balance-math.entity"
import { BalanceMathController } from "./balance-math.controller"
import { BalanceMathService } from "./balance-math.service"
import { User } from "../users/entities/user.entity"

@Module({
  imports: [TypeOrmModule.forFeature([BalanceMath, User])],
  exports: [TypeOrmModule, BalanceMathService],
  controllers: [BalanceMathController],
  providers: [BalanceMathService],
})
export class BalanceMathModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes(UsersController)
  }
}
