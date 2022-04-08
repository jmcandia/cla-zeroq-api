import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  // Create NestJS application using AppModule module
  const app = await NestFactory.create(AppModule);
  // Access configuration values from ConfigService
  const configService = app.get(ConfigService);
  const port = configService.get('PORT', 3000);
  // Set up global prefix for all routes
  app.setGlobalPrefix('api');
  // Set up security headers
  app.use(helmet());
  // Set up global validation pipe
  app.useGlobalPipes(new ValidationPipe());
  // Start the application
  await app.listen(port);
}
bootstrap();
