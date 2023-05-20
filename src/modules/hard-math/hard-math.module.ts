import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { HardMath } from "./entities/hard-math.entity"
import { HardMathController } from "./hard-math.controller"
import { HardMathService } from "./hard-math.service"
import { User } from "../users/entities/user.entity"

@Module({
  imports: [TypeOrmModule.forFeature([HardMath, User])],
  exports: [TypeOrmModule, HardMathService],
  controllers: [HardMathController],
  providers: [HardMathService],
})
export class HardMathModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes(UsersController)
  }
}
