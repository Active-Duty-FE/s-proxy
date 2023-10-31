import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DataSource, Repository } from 'typeorm'
import { CreateSmsManPriceDto } from './dto/create-sms-man-price.dto'
import { UpdateSmsManPriceDto } from './dto/update-sms-man-price.dto'
import { SmsManPrice } from './entities/sms-man-price.entity'

@Injectable()
export class SmsManPriceService {
  constructor(
    @InjectRepository(SmsManPrice)
    private smsManPriceRepository: Repository<SmsManPrice>,
    private dataSource: DataSource,
  ) {}
  // create(createSmsManPriceDto: CreateSmsManPriceDto) {
  //   return 'This action adds a new smsManPrice'
  // }

  // findAll() {
  //   return `This action returns all smsManPrice`
  // }

  findAllByCountry(country: string) {
    const smsManPrice = this.smsManPriceRepository.find({
      where: { country },
    })
    return smsManPrice
  }
  async findId(countryId: number, platformId: number) {
    const smsManPriceId = await this.smsManPriceRepository.findOne({
      select: ['id'],
      where: { countryId, platformId },
    })
    return smsManPriceId
  }
  update(id: number, updateSmsManPriceDto: UpdateSmsManPriceDto) {
    return `This action updates a #${id} smsManPrice`
  }

  remove(id: number) {
    return `This action removes a #${id} smsManPrice`
  }
}
