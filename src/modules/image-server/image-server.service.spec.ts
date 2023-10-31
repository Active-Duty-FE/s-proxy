import { Test, TestingModule } from '@nestjs/testing'
import { ImageServerService } from './image-server.service'

describe('ImageServerService', () => {
  let service: ImageServerService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImageServerService],
    }).compile()

    service = module.get<ImageServerService>(ImageServerService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
