import { Controller, Get } from '@nestjs/common';
import { ZeroQService } from './zeroq.service';

@Controller('zeroq')
export class ZeroQController {
  constructor(private readonly zeroQService: ZeroQService) {}

  @Get('/offices')
  getOffices() {
    return this.zeroQService.getOffices();
  }
}
