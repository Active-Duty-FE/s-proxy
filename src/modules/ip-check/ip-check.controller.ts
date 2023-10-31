import { Controller, Get, Query, UseGuards } from '@nestjs/common'
import { IpCheckService } from './ip-check.service'

@Controller('ip-check')
export class IpCheckController {
  constructor(private readonly ipCheckService: IpCheckService) {}

  @Get()
  async checkIp(@Query('ip') ip?: string) {
    return await this.ipCheckService.checkIp(ip)
  }
}
