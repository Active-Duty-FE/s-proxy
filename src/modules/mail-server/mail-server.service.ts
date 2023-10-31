import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DataSource, Repository } from 'typeorm'
import { inspect } from 'util'
import { CreateMailServerDto } from './dto/create-mail-server.dto'
import { UpdateMailServerDto } from './dto/update-mail-server.dto'
import { MailServer } from './entities/mail-server.entity'
import { useGetMail } from './main'
@Injectable()
export class MailServerService {
  constructor(private readonly dataSource: DataSource) {}
  async create(createMailServerDto: CreateMailServerDto) {
    const res = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(MailServer)
      .values({
        user: { id: createMailServerDto.userId },
        emailAddress: createMailServerDto.emailAddress,
        password: createMailServerDto.password,
        code: createMailServerDto.code,
      })
      .execute()
    return res
  }

  async findAllUnread(payload: any) {
    const res = await useGetMail(payload)
    return res
  }
  async findAll(id: number) {
    const res = await this.dataSource
      .createQueryBuilder()
      .select('mailServer')
      .from(MailServer, 'mailServer')
      .where({ user: { id } })
      .execute()
    return res
  }
  findOne(id: number) {}

  update(id: number, updateMailServerDto: UpdateMailServerDto) {
    return `This action updates a #${id} mailService`
  }

  remove(id: number) {
    return `This action removes a #${id} mailService`
  }
}
