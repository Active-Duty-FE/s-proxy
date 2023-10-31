import { User } from 'src/modules/users/entities/user.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm'

@Entity('mail-server')
export class MailServer {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  code: string

  @Column({ length: 100 })
  emailAddress: string

  @Column({ length: 100 })
  password: string

  @CreateDateColumn()
  create_time: Timestamp

  @ManyToOne((type) => User, (user) => user.mailServer)
  user: User
}
