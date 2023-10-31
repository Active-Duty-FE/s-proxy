import { User } from 'src/modules/users/entities/user.entity'
import { SmsManPrice } from 'src/modules/sms-man-price/entities/sms-man-price.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm'

@Entity('sms_man')
export class SmsMan {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 35, unique: true })
  phoneNumber: string

  @Column({ length: 10 })
  code: string

  @CreateDateColumn()
  create_time: Timestamp

  @ManyToOne((type) => User, (user) => user.smsMan)
  user: User

  @ManyToOne((type) => SmsManPrice, (smsManPrice) => smsManPrice.smsMan)
  smsManPrice: SmsManPrice
}
