 import { Injectable } from '@nestjs/common';
import { SignupStartDto } from './dto/signup-start.dto';
import { SignupEndDto } from './dto/signup-end.dto';
import { LoginDto } from './dto/login.dto';
import { ResetPasswordDto } from './dto/reset.dto';
import { ForgotPasswordDto } from './dto/forgot.dto';

@Injectable()
export class AuthService {

  constructor() {}

  async signupStart(user: SignupStartDto, req: Express.Request) {}

  async signupEnd(verification: SignupEndDto, req: Express.Request) {}

  async login(user: LoginDto) {}

  async forgotPassword(user: ForgotPasswordDto, req: Express.Request) {}

  async resetPassword(brandedUser: ResetPasswordDto) {}
}
