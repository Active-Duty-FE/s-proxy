import { Test, TestingModule } from '@nestjs/testing'
import { StaticIpsController } from './static-ips.controller'
import { StaticIpsService } from './static-ips.service'

describe('StaticIpsController', () => {
  let controller: StaticIpsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StaticIpsController],
      providers: [StaticIpsService],
    }).compile()

    controller = module.get<StaticIpsController>(StaticIpsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
