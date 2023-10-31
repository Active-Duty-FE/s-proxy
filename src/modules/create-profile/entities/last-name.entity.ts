import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('last-name')
export class LastName {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 15, unique: true })
  last_name: string
}
