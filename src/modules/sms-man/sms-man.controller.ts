import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common'
import { SmsManService } from './sms-man.service'
import { SmsManPriceService } from 'src/modules/sms-man-price/sms-man-price.service'
import { Roles } from 'src/decorator/roles.decorator'
import { Role } from 'src/enums/role.enum'

@Controller('sms-a')
export class SmsManController {
  constructor(
    private readonly smsManService: SmsManService,
    private readonly smsManPriceService: SmsManPriceService,
  ) {}
  @Roles(Role.Admin)
  @Post()
  async create(@Body() createSmsManDto: any) {
    return await this.smsManService.create(createSmsManDto)
  }
  @Roles(Role.Admin)
  @Post('phone-number')
  async getPhoneNumber(@Body() payload: any) {
    return await this.smsManService.getPhoneNumber(payload)
  }
  @Roles(Role.Admin)
  @Post('code')
  async getSmsCode(@Body() payload: any) {
    return await this.smsManService.getSmsCode(payload)
  }
  @Roles(Role.Admin)
  @Get(':id')
  async findAllSmsA(@Param('id') id: number) {
    return await this.smsManService.findAllSmsA(id)
  }
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.smsManService.findOne(+id)
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSmsManDto: UpdateSmsManDto) {
  //   return this.smsManService.update(+id, updateSmsManDto)
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.smsManService.remove(+id)
  // }
}
