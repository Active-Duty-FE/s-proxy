import { HttpService } from '@nestjs/axios'
import { HttpServer, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { AxiosError } from 'axios'
import { userInfo } from 'os'
import { catchError, firstValueFrom } from 'rxjs'
import { createQueryBuilder, DataSource, Repository } from 'typeorm'
import { CreateStaticIpDto } from './dto/create-static-ip.dto'
import { UpdateStaticIpDto } from './dto/update-static-ip.dto'
import { StaticIp } from './entities/static-ip.entity'

@Injectable()
export class StaticIpsService {
  constructor(
    @InjectRepository(StaticIp)
    private staticIpRepository: Repository<StaticIp>,
    private httpService: HttpService,
    private dataSource: DataSource,
  ) {}
  async init() {
    const { data } = await firstValueFrom(
      this.httpService
        .get('http://api.rola-ip.co/user_get_static_res_pool', {
          params: {
            token: '8LPtMhY4qKPPx5HV1673331276307',
            page_index: 1,
            page_size: 15,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happened!'
          }),
        ),
    )
    await this.staticIpRepository.clear()
    data.data.rows.map((item) => {
      const obj = this.staticIpRepository.create(item)
      const res = this.staticIpRepository.save(obj)
    })
  }
  async buyStaticIp(payload) {
    const { data } = await firstValueFrom(
      this.httpService
        .get('http://api.rola-ip.co/user_add_static_res_order', {
          params: {
            token: '8LPtMhY4qKPPx5HV1673331276307',
            count: 1,
            target_biz_id: 0,
            ...payload,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happened!'
          }),
        ),
    )
    if (data.code === 0) {
      const {
        data: { rows },
      } = await this.getStaticIpInfo(data.data.orderNo)
      const result = await this.dataSource
        .createQueryBuilder()
        .insert()
        .into(StaticIp)
        .values([{ ...rows[0], user: { id: payload.userId } }])
        .execute()
    }
    return data
  }
  async getStaticIpInfo(orderNo: string) {
    const { data } = await firstValueFrom(
      this.httpService
        .get('http://api.rola-ip.co/user_get_static_res_pool', {
          params: {
            token: '8LPtMhY4qKPPx5HV1673331276307',
            page_index: 1,
            page_size: 15,
            orderNo,
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
  async updateUsername(data: any, userId: number) {
    const staticIpDto = await this.staticIpRepository.findOne({
      where: { orderNo: data.data.orderNo },
    })
    return await this.staticIpRepository.update(
      { orderNo: data.orderNo },
      { ...staticIpDto, user: { id: userId } },
    )
  }
  findAll() {
    return `This action returns all staticIps`
  }

  async findByUserId(id: number, offset: number) {
    const res = await this.dataSource
      .getRepository(StaticIp)
      .createQueryBuilder('sip')
      .orderBy('sip.create_time', 'DESC')
      .where('sip.userId = :userId', { userId: id })
      .offset(offset * 10)
      .execute()
    const total = await this.dataSource
      .getRepository(StaticIp)
      .createQueryBuilder('sip')
      .orderBy('sip.create_time', 'DESC')
      .where('sip.userId = :userId', { userId: id })
      .getCount()
    return { res, total }
  }

  update(id: number, updateStaticIpDto: UpdateStaticIpDto) {
    return `This action updates a #${id} staticIp`
  }

  async remove(id: number) {
    const { data } = await firstValueFrom(
      this.httpService
        .get('http://api.rola-ip.co/user_remove_static_res_ip', {
          params: {
            token: '8LPtMhY4qKPPx5HV1673331276307',
            id,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happened!'
          }),
        ),
    )
    if (data.code === 0) {
      return this.dataSource
        .createQueryBuilder()
        .delete()
        .from(StaticIp)
        .where('id = :id', { id })
        .execute()
    }
    return data
  }
}
