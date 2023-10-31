import { SmsMan } from 'src/modules/sms-man/entities/sms-man.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity('sms_man_price')
export class SmsManPrice {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 20 })
  country: string

  @Column()
  countryId: number

  @Column({ length: 20 })
  platform: string

  @Column()
  platformId: number

  @Column({ type: 'float' })
  price: number

  @OneToMany((type) => SmsMan, (smsMan) => smsMan.smsManPrice)
  smsMan: SmsMan
}
