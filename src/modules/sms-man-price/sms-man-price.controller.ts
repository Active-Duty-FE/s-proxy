import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common'
import { SmsManPriceService } from './sms-man-price.service'

@Controller('sms-a-price')
export class SmsManPriceController {
  constructor(private readonly smsManPriceService: SmsManPriceService) {}

  // @Post()
  // create(@Body() createSmsManPriceDto: CreateSmsManPriceDto) {
  //   return this.smsManPriceService.create(createSmsManPriceDto)
  // }

  @Get('id')
  findId(@Query('country_id') countryId, @Query('application_id') platformId) {
    return this.smsManPriceService.findId(countryId, platformId)
  }

  @Get()
  findOneByCountry(@Query('country') country: string) {
    return this.smsManPriceService.findAllByCountry(country)
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateSmsManPriceDto: UpdateSmsManPriceDto,
  // ) {
  //   return this.smsManPriceService.update(+id, updateSmsManPriceDto)
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.smsManPriceService.remove(+id)
  // }
}
