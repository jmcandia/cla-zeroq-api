import { Module } from '@nestjs/common';
import { ZeroQController } from './zeroq.controller';
import { ZeroQService } from './zeroq.service';

@Module({
  controllers: [ZeroQController],
  providers: [ZeroQService]
})
export class ZeroQModule {}
