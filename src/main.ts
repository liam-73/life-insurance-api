import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // request validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )

  // security headers
  app.use(helmet())

  // enable CORS
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })

  app.use(
    rateLimit({
      windowMs: 60 * 1000, // 1 minute
      max: 20, // max 20 requests per minute
    }),
  )

  await app.listen(8080)
}
bootstrap()
