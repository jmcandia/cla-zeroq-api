import { Test, TestingModule } from '@nestjs/testing';
import { ZeroQService } from './zeroq.service';

describe('ZeroQService', () => {
  let service: ZeroQService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZeroQService]
    }).compile();

    service = module.get<ZeroQService>(ZeroQService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
