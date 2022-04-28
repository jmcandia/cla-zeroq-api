import { Test, TestingModule } from '@nestjs/testing';
import { ZeroQController } from './zeroq.controller';
import { ZeroQService } from './zeroq.service';

describe('ZeroQController', () => {
  let controller: ZeroQController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZeroQController],
      providers: [ZeroQService]
    }).compile();

    controller = module.get<ZeroQController>(ZeroQController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
