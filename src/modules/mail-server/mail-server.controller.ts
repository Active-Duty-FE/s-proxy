import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common'
import { Roles } from 'src/decorator/roles.decorator'
import { Role } from 'src/enums/role.enum'
import { MailServerService } from './mail-server.service'

@Controller('mail-server')
export class MailServiceController {
  constructor(private readonly mailServiceService: MailServerService) {}
  @Roles(Role.Admin)
  @Post('add')
  async create(@Body() payload: any) {
    return this.mailServiceService.create(payload)
  }

  @Roles(Role.Admin)
  @Post()
  async findAllOutLook(@Body() payload: any) {
    try {
      const res = await this.mailServiceService.findAllUnread(payload)
      return res
    } catch (error) {
      console.log(error)
    }
  }
  @Roles(Role.Admin)
  @Get(':id')
  async findAll(@Param('id') id: number) {
    return await this.mailServiceService.findAll(+id)
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateMailServiceDto: UpdateMailServerDto,
  // ) {
  //   return this.mailServiceService.update(+id, updateMailServiceDto)
  // }
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.mailServiceService.remove(+id)
  // }
}
