import { Test, TestingModule } from '@nestjs/testing';
import { StaticIpsService } from './static-ips.service';

describe('StaticIpsService', () => {
  let service: StaticIpsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaticIpsService],
    }).compile();

    service = module.get<StaticIpsService>(StaticIpsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
