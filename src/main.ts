import { NestFactory } from "@nestjs/core"
import { AppModule } from "./modules/app.module"
import { ConfigService } from "@nestjs/config"
import * as cookieParser from "cookie-parser"
import { AllExceptionsFilter } from "./exception-filters/exception.filter"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"

//TODO https://dev.to/thejscode/deploying-nestjs-application-easy-and-explained-11cm
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })
  app.useGlobalFilters(new AllExceptionsFilter())

  const config = new DocumentBuilder()
    .setTitle("Nest-crud")
    .setDescription("")
    .addTag("auth")
    .addTag("users")
    .addTag("tasks")
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("api", app, document)
  const configService = app.get(ConfigService)

  app.use(cookieParser())
  // app.enableCors({
  //   credentials: true,
  //   origin: configService.get("client_origin"),
  // })
  await app.listen(+configService.get("port"))
}

bootstrap()
