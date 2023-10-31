import { Module } from '@nestjs/common'
import { SmsManPriceService } from './sms-man-price.service'
import { SmsManPriceController } from './sms-man-price.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SmsManPrice } from './entities/sms-man-price.entity'

@Module({
  imports: [TypeOrmModule.forFeature([SmsManPrice])],
  controllers: [SmsManPriceController],
  providers: [SmsManPriceService],
  exports: [SmsManPriceService],
})
export class SmsManPriceModule {}
