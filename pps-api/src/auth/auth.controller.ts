import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { SignupStartDto } from './dto/signup-start.dto';
import { SignupEndDto } from './dto/signup-end.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import ForgotPasswordDto from './dto/forgot.dto';
import { ResetPasswordDto } from './dto/reset.dto';
import UpdateCredentialsDto from './dto/update-credentials.dto';
import ActiveDto from './dto/active.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@ApiTags('Auth')
@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup-start')
  signupStart(@Body() user: SignupStartDto, @Req() req: Express.Request) {
    return this.authService.signupStart(user, req);
  }

  @Post('signup-end')
  signupEnd(@Body() verification: SignupEndDto, @Req() req: Express.Request) {
    return this.authService.signupEnd(verification, req);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req: Express.Request) {
    return this.authService.login(req);
  }

  @Post('forgot-password')
  forgotPassword(
    @Body() brandedUser: ForgotPasswordDto,
    @Req() req: Express.Request,
  ) {
    return this.authService.forgotPassword(brandedUser, req);
  }

  @Put('reset-password')
  resetPassword(@Body() user: ResetPasswordDto, @Req() req: Express.Request) {
    return this.authService.resetPassword(user, req);
  }

  @UseGuards(JwtAuthGuard)
  @Put('update/credentials')
  updateCredentials(
    @Body() credentials: UpdateCredentialsDto,
    @Query('userId') userId: string,
  ) {
    return this.authService.updateCredentials(credentials, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/update/status')
  changeStatus(@Query() query: ActiveDto) {
    return this.authService.changeStatus(query);
  }

  @UseGuards(JwtAuthGuard)
  @Get('users/all')
  getUsers() {
    return this.authService.getAllTestUsers();
  }
}
