import { User } from 'src/modules/users/entities/user.entity'
import { SmsManPrice } from 'src/modules/sms-man-price/entities/sms-man-price.entity'

export class CreateSmsManDto {
  userId: number
  smsManPriceId: number
  phoneNumber: string
  code: string
}
