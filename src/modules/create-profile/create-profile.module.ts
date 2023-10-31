import { Module } from '@nestjs/common'
import { CreateProfileService } from './create-profile.service'
import { CreateProfileController } from './create-profile.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FirstName } from './entities/first-name.entity'
import { LastName } from './entities/last-name.entity'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [TypeOrmModule.forFeature([FirstName, LastName]), JwtModule],
  controllers: [CreateProfileController],
  providers: [CreateProfileService],
})
export class CreateProfileModule {}
