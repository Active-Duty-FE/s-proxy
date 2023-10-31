import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common'
import { IpService } from './ip.service'
import { CreateIpDto } from './dto/create-ip.dto'
import { UpdateIpDto } from './dto/update-ip.dto'
import { Roles } from 'src/decorator/roles.decorator'
import { Role } from 'src/enums/role.enum'

@Controller('ip')
export class IpController {
  constructor(private readonly ipService: IpService) {}

  // @Post()
  // create(@Body() createIpDto: CreateIpDto) {
  //   return this.ipService.create(createIpDto)
  // }

  @HttpCode(HttpStatus.OK)
  @Roles(Role.Admin)
  @Post('change')
  change(@Body() updateIpDto: UpdateIpDto) {
    return this.ipService.change(updateIpDto.countryCode, updateIpDto.proxyId)
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.ipService.findOne(+id)
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateIpDto: UpdateIpDto) {
  //   return this.ipService.update(+id, updateIpDto)
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.ipService.remove(+id)
  // }
}
