import { PartialType } from '@nestjs/mapped-types'
import { CreateMailServerDto } from './create-mail-server.dto'

export class UpdateMailServerDto extends PartialType(CreateMailServerDto) {}
