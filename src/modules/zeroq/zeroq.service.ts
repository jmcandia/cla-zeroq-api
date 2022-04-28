import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import ZeroQ from 'zeroq-sdk';

@Injectable()
export class ZeroQService {
  constructor(private readonly configService: ConfigService) {}

  getOffices() {
    const token = this.configService.get('ZEROQ_TOKEN');
    const zq = new ZeroQ({ token });
    return zq.getOffices();
  }
}
