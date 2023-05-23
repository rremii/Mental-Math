import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { DataSource } from "typeorm"
import { ConfigModule, ConfigService } from "@nestjs/config"
import configurations from "../configurations"
import { UsersModule } from "./users/users.module"
import { AuthModule } from "./auth/auth.module"
import { User } from "./users/entities/user.entity"
import { TokenModule } from "./token/token.module"
import { QuickMath } from "./quick-math/entities/quick-math.entity"
import { QuickMathModule } from "./quick-math/quick-math.module"
import { HardMath } from "./hard-math/entities/hard-math.entity"
import { HardMathModule } from "./hard-math/hard-math.module"
import { InputMathModule } from "./input-math/input-math.module"
import { InputMath } from "./input-math/entities/input-math.entity"
import { TrueFalseMathModule } from "./true-false-math/true-false-math.module"
import { TrueFalseMath } from "./true-false-math/entities/true-false-math.entity"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
      envFilePath: [".development.env", ".env", ".production.env"],
    }),
    UsersModule,
    AuthModule,
    QuickMathModule,
    HardMathModule,
    InputMathModule,
    TokenModule,
    TrueFalseMathModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        return {
          type: "postgres",

          host: config.get("db_host"),
          port: config.get("db_port"),
          username: config.get("db_user_name"),
          password: config.get("db_password"),
          database: config.get("db_name"),
          synchronize: true,

          entities: [User, QuickMath, HardMath, InputMath, TrueFalseMath],

          ssl: true,
          extra: {
            ssl: {
              rejectUnauthorized: false,
            },
          },
        }
      },
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
