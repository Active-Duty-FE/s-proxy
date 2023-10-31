import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { getRandomIntInclusive } from 'src/utils/indes'
import { Repository } from 'typeorm'
import { LongWithoutOverridesClass } from 'typeorm/driver/mongodb/bson.typings'
import { CreateCreateProfileDto } from './dto/create-create-profile.dto'
import { UpdateCreateProfileDto } from './dto/update-create-profile.dto'
import { FirstName } from './entities/first-name.entity'
import { LastName } from './entities/last-name.entity'

@Injectable()
export class CreateProfileService {
  constructor(
    @InjectRepository(FirstName)
    private readonly firstNameRepository: Repository<FirstName>,
    @InjectRepository(LastName)
    private readonly lastNameRepository: Repository<LastName>,
  ) {}
  create(createCreateProfileDto: CreateCreateProfileDto) {
    return 'This action adds a new createProfile'
  }

  async findOneProfile() {
    let firstName = ''
    let lastName = ''
    const firstNameCount = await this.firstNameRepository.count()
    const lastNameCount = await this.lastNameRepository.count()
    const firstNames = await this.firstNameRepository.find()
    const lastNames = await this.lastNameRepository.find()
    const firstNameIds = firstNames.map((item) => item.id)
    const lastNameIds = lastNames.map((item) => item.id)

    const firstNameRandomIdIndex = getRandomIntInclusive(1, firstNameCount)
    const lastNameRandomIdIndex = getRandomIntInclusive(1, lastNameCount)
    const firstNameId = firstNameIds[firstNameRandomIdIndex]
    const lastNameId = lastNameIds[lastNameRandomIdIndex]
    const { last_name } = await this.lastNameRepository.findOne({
      where: { id: lastNameId },
    })
    lastName = last_name
    const { first_name } = await this.firstNameRepository.findOne({
      where: { id: firstNameId },
    })

    firstName = first_name
    return {
      code: 200,
      message: 'created name successfully!',
      data: { name: `${lastName}${firstName}` },
    }
  }

  addFirstName(name: string) {
    const names = name.split(' ')
    names.forEach((item) => {
      const name = this.firstNameRepository.create({ first_name: item })
      this.firstNameRepository.save(name)
    })
  }
}
