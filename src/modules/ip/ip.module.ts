import { Module } from '@nestjs/common'
import { IpService } from './ip.service'
import { IpController } from './ip.controller'
import { HttpModule } from '@nestjs/axios'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [HttpModule, JwtModule],
  controllers: [IpController],
  providers: [IpService],
})
export class IpModule {}
