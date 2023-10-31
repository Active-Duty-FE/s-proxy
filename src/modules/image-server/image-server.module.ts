import { Module } from '@nestjs/common'
import { ImageServerService } from './image-server.service'
import { ImageServerController } from './image-server.controller'
import { JwtModule } from '@nestjs/jwt'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [JwtModule, HttpModule],
  controllers: [ImageServerController],
  providers: [ImageServerService],
})
export class ImageServerloadModule {}
