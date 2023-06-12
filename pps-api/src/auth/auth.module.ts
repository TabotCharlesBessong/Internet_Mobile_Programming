import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma.service';
import { MailService } from 'src/mail/mail.service';
import { ConfigService } from '@nestjs/config';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { MailModule } from 'src/mail/mail.module';
import { AuthService } from './auth.service';

const configService: ConfigService = new ConfigService();

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    MailService,
    ConfigService,
    LocalStrategy,
    JwtStrategy,
  ],
  imports: [
    PassportModule,
    JwtModule.register({
      secret: configService.get<string>('JWT_SECRET_KEY'),
      signOptions: { expiresIn: '60s' },
    }),
    MailModule,
  ],
})
export class AuthModule {}
