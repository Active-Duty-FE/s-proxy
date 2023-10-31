import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '../users/users.service'
import { jwtConstants } from './constants'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private usersService: UsersService,
  ) {}
  async signIn(id: string, pass: string, res): Promise<any> {
    const user = await this.usersService.findOneByName(id)
    if (user?.password !== pass) {
      throw new UnauthorizedException()
    } else {
      const roles = await this.usersService.findRolesByUserId(user.id)

      const access_token = await this.jwtService.signAsync(
        { roles, id: user.id },
        {
          secret: jwtConstants.secret,
        },
      )
      const token = `Bearer ${access_token}`
      res.setHeader('authorization', token)
      res.send({
        codeStatus: HttpStatus.OK,
        message: '登陆成功',
      })
    }
  }
  getUserIdByName(token: string) {
    const _token = token.split('Bearer ')[1]
    const res = this.jwtService.verify(_token)
    return this.usersService.findOneByName(res.name)
  }
}
