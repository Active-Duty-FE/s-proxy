import { Test, TestingModule } from '@nestjs/testing'
import { MailServiceController } from './mail-server.controller'
import { MailServerService } from './mail-server.service'

describe('MailServiceController', () => {
  let controller: MailServiceController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MailServiceController],
      providers: [MailServerService],
    }).compile()

    controller = module.get<MailServiceController>(MailServiceController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
