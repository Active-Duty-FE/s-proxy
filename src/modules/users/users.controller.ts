import { Controller, Get, Post, Body, Param } from '@nestjs/common'
import { Roles } from 'src/decorator/roles.decorator'
import { Role } from 'src/enums/role.enum'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto)
  // }

  // @Get()
  // findAll() {
  //   return this.usersService.findAll()
  // }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id)
  }

  @Get('roles/:id')
  findRolesByUserId(@Param('id') id: string) {
    return this.usersService.findRolesByUserId(+id)
  }
  @Roles(Role.Admin)
  @Get('dynamic-ip/:id')
  findOneDynamicIp(@Param('id') id: string) {
    return this.usersService.findOneDynamicIp(+id)
  }
  @Roles(Role.Admin)
  @Post('profile')
  findOneByName(@Body() user: Record<string, any>) {
    return this.usersService.findOneByName(user.name)
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto)
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id)
  // }
}
