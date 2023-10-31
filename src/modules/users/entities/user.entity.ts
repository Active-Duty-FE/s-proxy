import { Role } from 'src/enums/role.enum'
import { MailServer } from 'src/modules/mail-server/entities/mail-server.entity'
import { Roles } from 'src/modules/roles/entities/role.entity'
import { SmsMan } from 'src/modules/sms-man/entities/sms-man.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 25, unique: true })
  name: string

  @Column({ length: 25 })
  password: string

  @Column({ length: 25 })
  proxyId: string

  @Column({ length: 25 })
  proxyPwd: string

  @OneToMany((type) => SmsMan, (smsMan) => smsMan.user)
  smsMan: SmsMan

  @OneToMany((type) => MailServer, (mailServer) => mailServer.user)
  mailServer: MailServer

  @ManyToMany((type) => Roles)
  @JoinTable()
  roles: Roles[]
}
