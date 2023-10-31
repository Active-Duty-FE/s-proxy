import { User } from 'src/modules/users/entities/user.entity'
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity('roles')
export class Roles {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 15, unique: true })
  name: string
}
