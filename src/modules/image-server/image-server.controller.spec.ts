import { Test, TestingModule } from '@nestjs/testing'
import { ImageServerController } from './image-server.controller'
import { ImageServerService } from './image-server.service'

describe('ImageServerController', () => {
  let controller: ImageServerController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImageServerController],
      providers: [ImageServerService],
    }).compile()

    controller = module.get<ImageServerController>(ImageServerController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
