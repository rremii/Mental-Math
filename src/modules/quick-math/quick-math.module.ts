import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { QuickMath } from "./entities/quick-math.entity"
import { QuickMathController } from "./quick-math.controller"
import { QuickMathService } from "./quick-math.service"
import { User } from "../users/entities/user.entity"

@Module({
  imports: [TypeOrmModule.forFeature([QuickMath, User])],
  exports: [TypeOrmModule, QuickMathService],
  controllers: [QuickMathController],
  providers: [QuickMathService],
})
export class QuickMathModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes(UsersController)
  }
}
