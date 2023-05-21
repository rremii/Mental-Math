import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { InputMath } from "./entities/input-math.entity"
import { InputMathController } from "./input-math.controller"
import { InputMathService } from "./input-math.service"
import { User } from "../users/entities/user.entity"

@Module({
  imports: [TypeOrmModule.forFeature([InputMath, User])],
  exports: [TypeOrmModule, InputMathService],
  controllers: [InputMathController],
  providers: [InputMathService],
})
export class InputMathModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes(UsersController)
  }
}
