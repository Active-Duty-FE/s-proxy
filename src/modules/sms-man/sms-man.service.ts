import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { AxiosError } from 'axios'
import { catchError, firstValueFrom } from 'rxjs'
import { DataSource, Repository } from 'typeorm'
import { CreateSmsManDto } from './dto/create-sms-man.dto'
import { UpdateSmsManDto } from './dto/update-sms-man.dto'
import { SmsMan } from './entities/sms-man.entity'

@Injectable()
export class SmsManService {
  constructor(
    @InjectRepository(SmsMan)
    private smsManServiceRepository: Repository<SmsMan>,
    private dataSource: DataSource,
    private httpService: HttpService,
  ) {}
  async create(createSmsManDto: CreateSmsManDto) {
    try {
      const res = await this.dataSource
        .createQueryBuilder()
        .insert()
        .into(SmsMan)
        .values({
          user: { id: createSmsManDto.userId },
          smsManPrice: { id: createSmsManDto.smsManPriceId },
          phoneNumber: createSmsManDto.phoneNumber,
          code: createSmsManDto.code,
        })
        .execute()
      return res
    } catch (error) {
      return error
    }
  }

  findAllSmsA(id: number) {
    return this.smsManServiceRepository.find({
      relations: { smsManPrice: true },
      where: { user: { id } },
    })
  }
  async getPhoneNumber(payload: any) {
    const { countryId, platformId } = payload
    const { data } = await firstValueFrom(
      this.httpService
        .get<any>('http://api.sms-man.com/control/get-number', {
          params: {
            token: 'zAbAn13ZwPjp3-UrsjjFjsuWSnNZfCOU',
            country_id: countryId,
            application_id: platformId,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happened!'
          }),
        ),
    )
    return data
  }
  async getSmsCode(payload: any) {
    const { requestId } = payload
    const { data } = await firstValueFrom(
      this.httpService
        .get<any>('http://api.sms-man.com/control/get-sms', {
          params: {
            token: 'zAbAn13ZwPjp3-UrsjjFjsuWSnNZfCOU',
            request_id: requestId,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happened!'
          }),
        ),
    )
    return data
  }

  // update(id: number, updateSmsManDto: UpdateSmsManDto) {
  //   return `This action updates a #${id} smsMan`
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} smsMan`
  // }
}
