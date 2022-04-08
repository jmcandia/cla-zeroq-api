import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Create NestJS application using AppModule module
  const app = await NestFactory.create(AppModule);
  // Access configuration values from ConfigService
  const configService = app.get(ConfigService);
  const port = configService.get('PORT', 3000);
  // Start the application
  await app.listen(port);
}
bootstrap();
