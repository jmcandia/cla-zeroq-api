import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZeroQModule } from './modules/zeroq/zeroq.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10
    }),
    ZeroQModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
