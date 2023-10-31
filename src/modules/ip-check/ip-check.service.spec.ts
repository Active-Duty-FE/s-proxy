import { Test, TestingModule } from '@nestjs/testing';
import { IpCheckService } from './ip-check.service';

describe('IpCheckService', () => {
  let service: IpCheckService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IpCheckService],
    }).compile();

    service = module.get<IpCheckService>(IpCheckService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
