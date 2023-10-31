import { Test, TestingModule } from '@nestjs/testing';
import { SmsManPriceService } from './sms-man-price.service';

describe('SmsManPriceService', () => {
  let service: SmsManPriceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmsManPriceService],
    }).compile();

    service = module.get<SmsManPriceService>(SmsManPriceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
