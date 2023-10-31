import { Module } from '@nestjs/common'
import { SmsManService } from './sms-man.service'
import { SmsManController } from './sms-man.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SmsMan } from './entities/sms-man.entity'
import { JwtModule } from '@nestjs/jwt'
import { HttpModule } from '@nestjs/axios'
import { SmsManPrice } from 'src/modules/sms-man-price/entities/sms-man-price.entity'
import { SmsManPriceModule } from 'src/modules/sms-man-price/sms-man-price.module'

@Module({
  imports: [
    TypeOrmModule.forFeature([SmsMan]),
    JwtModule,
    HttpModule,
    SmsManPriceModule,
  ],
  controllers: [SmsManController],
  providers: [SmsManService],
})
export class SmsManModule {}
