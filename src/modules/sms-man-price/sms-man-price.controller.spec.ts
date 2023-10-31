import { Test, TestingModule } from '@nestjs/testing';
import { SmsManPriceController } from './sms-man-price.controller';
import { SmsManPriceService } from './sms-man-price.service';

describe('SmsManPriceController', () => {
  let controller: SmsManPriceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmsManPriceController],
      providers: [SmsManPriceService],
    }).compile();

    controller = module.get<SmsManPriceController>(SmsManPriceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
