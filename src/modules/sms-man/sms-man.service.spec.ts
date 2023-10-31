import { Test, TestingModule } from '@nestjs/testing';
import { SmsManService } from './sms-man.service';

describe('SmsManService', () => {
  let service: SmsManService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmsManService],
    }).compile();

    service = module.get<SmsManService>(SmsManService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
