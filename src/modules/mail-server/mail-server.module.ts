import { Module } from '@nestjs/common'
import { MailServiceController } from './mail-server.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MailServer } from './entities/mail-server.entity'
import { MailServerService } from './mail-server.service'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [TypeOrmModule.forFeature([MailServer]), JwtModule],
  controllers: [MailServiceController],
  providers: [MailServerService],
})
export class MailServerModule {}
