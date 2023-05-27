import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupStartDto } from './dto/signup-start.dto';
import { SignupEndDto } from './dto/signup-end.dto';
import { ForgotPasswordDto } from './dto/forgot.dto';
import { ResetPasswordDto } from './dto/reset.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup-start')
  signupStart(user: SignupStartDto, req: Express.Request) {
    return this.authService.signupStart(user, req);
  }

  @Post('signup-end')
  signupEnd(verification: SignupEndDto, req: Express.Request) {
    return this.authService.signupEnd(verification, req);
  }

  @Post('forgot-password')
  forgotPassword(brandedUser: ForgotPasswordDto, req: Express.Request) {
    return this.authService.forgotPassword(brandedUser, req);
  }

  @Post('reset-password')
  resetPassword(user: ResetPasswordDto) {
    return this.authService.resetPassword(user);
  }
}
