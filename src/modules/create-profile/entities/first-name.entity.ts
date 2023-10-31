import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('first-name')
export class FirstName {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 15, unique: true })
  first_name: string
}
