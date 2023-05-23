import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { TrueFalseMath } from "./entities/true-false-math.entity"
import { TrueFalseMathController } from "./true-false-math.controller"
import { TrueFalseMathService } from "./true-false-math.service"
import { User } from "../users/entities/user.entity"

@Module({
  imports: [TypeOrmModule.forFeature([TrueFalseMath, User])],
  exports: [TypeOrmModule, TrueFalseMathService],
  controllers: [TrueFalseMathController],
  providers: [TrueFalseMathService],
})
export class TrueFalseMathModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes(UsersController)
  }
}
