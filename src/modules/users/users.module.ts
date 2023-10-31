import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { StaticIpsModule } from '../static-ips/static-ips.module'
import { JwtModule } from '@nestjs/jwt'
import { RolesModule } from '../roles/roles.module'

@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtModule, RolesModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
