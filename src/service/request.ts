import { HttpService } from '@nestjs/axios'
import { AxiosError } from 'axios'
import { catchError, firstValueFrom } from 'rxjs'

class appRequest {
  constructor(
    private readonly baseUrl: string,
    private readonly httpService: HttpService,
  ) {}
  async get(url: string) {
    const { data } = await firstValueFrom(
      this.httpService.get<any>(this.baseUrl + url).pipe(
        catchError((error: AxiosError) => {
          throw 'An error happened!'
        }),
      ),
    )
    return data
  }
  async post(url: string, payload: any, config?: any) {
    const { data } = payload

    console.log(data, 'data')

    const res = await firstValueFrom(
      this.httpService.post<any>(this.baseUrl + url, data).pipe(
        catchError((error: AxiosError) => {
          throw 'An error happened!'
        }),
      ),
    )
    return res.data
  }
}
const requestInstance = new appRequest(
  'http://45.92.158.200:8084',
  new HttpService(),
)
export default requestInstance
