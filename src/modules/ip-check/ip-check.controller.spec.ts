import { Test, TestingModule } from '@nestjs/testing';
import { IpCheckController } from './ip-check.controller';

describe('IpCheckController', () => {
  let controller: IpCheckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IpCheckController],
    }).compile();

    controller = module.get<IpCheckController>(IpCheckController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
