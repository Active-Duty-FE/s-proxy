import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common'
import { Roles } from 'src/decorator/roles.decorator'
import { Role } from 'src/enums/role.enum'
import { StaticIpsService } from './static-ips.service'

@Controller('static-ips')
export class StaticIpsController {
  constructor(private readonly staticIpsService: StaticIpsService) {}

  // @Post()
  // create(@Body() createStaticIpDto: CreateStaticIpDto) {
  //   return this.staticIpsService.init()
  // }
  @Roles(Role.Admin)
  @Get('init')
  findAll() {
    // return this.staticIpsService.init()
  }
  @Roles(Role.Admin)
  @Get(':id')
  async findByUserId(@Param('id') id: string, @Query('offset') offset: string) {
    return await this.staticIpsService.findByUserId(+id, +offset)
  }
  @Roles(Role.Admin)
  @Post('buy')
  async buyStaticIp(@Body() data: any) {
    return await this.staticIpsService.buyStaticIp(data)
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateStaticIpDto: UpdateStaticIpDto,
  // ) {
  //   return this.staticIpsService.update(+id, updateStaticIpDto)
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staticIpsService.remove(+id)
  }
}
