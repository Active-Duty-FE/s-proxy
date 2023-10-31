import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { map } from 'rxjs'
import { CreateIpDto } from './dto/create-ip.dto'
import { UpdateIpDto } from './dto/update-ip.dto'
import { CountryCode } from './types/countryCode'
import { catchError, firstValueFrom } from 'rxjs'
import { AxiosError } from 'axios'
@Injectable()
export class IpService {
  constructor(private readonly httpService: HttpService) {}
  create(createIpDto: CreateIpDto) {
    return 'This action adds a new ip'
  }

  findAll() {
    return `This action returns all ip`
  }
  async change(countryCode: CountryCode, proxyId: string) {
    const { data } = await firstValueFrom(
      this.httpService
        .get(
          `http://refresh.rola.info/refresh?user=${proxyId}&country=${countryCode}&state=&city=`,
        )
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happened!'
          }),
        ),
    )
    return data
  }
  // findOne(id: number) {
  //   return `This action returns a #${id} ip`
  // }

  // update(id: number, updateIpDto: UpdateIpDto) {
  //   return `This action updates a #${id} ip`
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} ip`
  // }
}
