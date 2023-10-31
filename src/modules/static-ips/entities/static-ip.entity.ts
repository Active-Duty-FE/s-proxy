import { isEmpty } from 'rxjs'
import { User } from 'src/modules/users/entities/user.entity'
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('static_ips')
export class StaticIp {
  @PrimaryGeneratedColumn()
  primaryId: number

  @Column()
  endtime: string

  @Column()
  auto_rebuy: number

  @Column()
  create_time: string

  @Column()
  release_time: number

  @Column()
  remark: string

  @Column()
  last_check_rebuy_time: string

  @Column()
  id: number

  @Column()
  orderNo: string

  @Column()
  protocol: string

  @Column()
  ip: string

  @Column()
  user_name: string

  @Column()
  private: boolean

  @Column()
  status: number

  @ManyToOne((type) => User, (user) => user.id)
  user: User

  @Column()
  refresh_times: number

  @Column()
  country: string

  @Column()
  password: string
}
