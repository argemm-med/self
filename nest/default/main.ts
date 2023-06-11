import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as process from 'process'

async function bootstrap() {
  try {
    const PORT = 3000 || process.env.port

    const app = await NestFactory.create(AppModule)
    await app.listen(PORT)
    console.log(`Application started on port: http://localhost:${PORT}`)
  } catch (err) {
    console.error('Application start error: ', err.message)
  }
}

bootstrap()
