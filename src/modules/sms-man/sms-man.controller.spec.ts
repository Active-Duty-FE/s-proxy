import { Test, TestingModule } from '@nestjs/testing';
import { SmsManController } from './sms-man.controller';
import { SmsManService } from './sms-man.service';

describe('SmsManController', () => {
  let controller: SmsManController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmsManController],
      providers: [SmsManService],
    }).compile();

    controller = module.get<SmsManController>(SmsManController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
