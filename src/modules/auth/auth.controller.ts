import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common'
import { Public } from 'src/decorator/public.decorator'
import { AuthService } from './auth.service'
import { SignInDto } from './dto/sign-in.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto, @Response() res) {
    return this.authService.signIn(signInDto.id, signInDto.password, res)
  }

  @HttpCode(HttpStatus.OK)
  @Get('check-token')
  checkToken(@Request() req) {
    return {
      codeStatus: HttpStatus.OK,
      message: '授权成功',
      data: req.roles,
    }
  }
}
