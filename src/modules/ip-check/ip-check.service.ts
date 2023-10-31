import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { AxiosError } from 'axios'
import { catchError, firstValueFrom } from 'rxjs'

@Injectable()
export class IpCheckService {
  constructor(private readonly httpService: HttpService) {}
  async checkIp(ip?: string) {
    let ipInfoUrl = 'ip.json'
    let ipScoreUrl = 'f.json'
    if (ip) {
      ipInfoUrl = `search_ip?ip=${ip}`
      ipScoreUrl = `fraud_check?ip=${ip}`
    }

    const ipInfoRes = await firstValueFrom(
      this.httpService.get(`http://ip234.in/${ipInfoUrl}`).pipe(
        catchError((error: AxiosError) => {
          throw 'An error happened!'
        }),
      ),
    )
    const ipScoreRes = await firstValueFrom(
      this.httpService.get(`http://ip234.in/${ipScoreUrl}`).pipe(
        catchError((error: AxiosError) => {
          throw 'An error happened!'
        }),
      ),
    )
    let result = {}
    if (ipInfoRes.data.data) {
      result = Object.assign(ipInfoRes.data.data, ipScoreRes.data.data)
    } else {
      result = Object.assign(ipInfoRes.data, ipScoreRes.data.data)
    }
    return result
  }
}
