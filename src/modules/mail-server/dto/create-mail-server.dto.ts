import { User } from 'src/modules/users/entities/user.entity'

export class CreateMailServerDto {
  userId: number
  emailAddress: string
  password: string
  code: string
}
