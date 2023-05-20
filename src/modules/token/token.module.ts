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

@Module({
  imports: [TypeOrmModule.forFeature([User, QuickMath, HardMath]), JwtModule],
  providers: [
    TokenService,
    JwtService,
    UsersService,
    QuickMathService,
    HardMathService,
  ],
  exports: [TokenService],
})
export class TokenModule {}
