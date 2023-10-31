import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { IpCheckController } from './ip-check.controller'
import { IpCheckService } from './ip-check.service'

@Module({
  imports: [HttpModule, JwtModule],
  controllers: [IpCheckController],
  providers: [IpCheckService],
})
export class IpCheckModule {}
