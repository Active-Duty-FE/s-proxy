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
import { Roles } from 'src/decorator/roles.decorator'
import { Role } from 'src/enums/role.enum'
import { CreateProfileService } from './create-profile.service'
import { CreateCreateProfileDto } from './dto/create-create-profile.dto'

@Controller('create-profile')
export class CreateProfileController {
  constructor(private readonly createProfileService: CreateProfileService) {}

  @Post()
  create(@Body() createCreateProfileDto: CreateCreateProfileDto) {
    // return this.createProfileService.create(createCreateProfileDto)
  }
  @Roles(Role.Admin)
  @Get('name')
  findOneProfile() {
    return this.createProfileService.findOneProfile()
  }

  // @Post('add-first-name')
  // addFirstName(@Body() payload: any) {
  //   return this.createProfileService.addFirstName(payload.name)
  // }
}
