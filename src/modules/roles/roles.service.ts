import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { createQueryBuilder, DataSource, Repository } from 'typeorm'
import { User } from '../users/entities/user.entity'
import { Roles } from './entities/role.entity'

@Injectable()
export class RolesService {
  constructor(private readonly dataSource: DataSource) {}
  // create(createRoleDto: CreateRoleDto) {
  //   return 'This action adds a new role';
  // }
  // async findAll(id: number) {
  //   return await this.usersRepository.find({
  //     relations: { roles: true },
  //     where: { id },
  //   })
  // }
  // findOne(id: number) {
  //   return `This action returns a #${id} role`;
  // }
  // update(id: number, updateRoleDto: UpdateRoleDto) {
  //   return `This action updates a #${id} role`;
  // }
  // remove(id: number) {
  //   return `This action removes a #${id} role`;
  // }
}
