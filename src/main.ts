import { NestFactory } from "@nestjs/core"
import { AppModule } from "./modules/app.module"
import { ConfigService } from "@nestjs/config"
import * as cookieParser from "cookie-parser"
import { AllExceptionsFilter } from "./exception-filters/exception.filter"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
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

  app.use(cookieParser())
  app.enableCors({
    credentials: true,
    origin: "http://localhost:5173",
  })
  const configService = app.get(ConfigService)
  await app.listen(+configService.get("port"))
}

bootstrap()
