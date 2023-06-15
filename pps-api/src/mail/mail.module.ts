import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { ConfigService } from '@nestjs/config';

const configService: ConfigService = new ConfigService();

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: configService.get<string>('SMTP_HOST'),
        secure: false,
        auth: {
          user: configService.get<string>('DIGITEKISI_EMAIL'),
          pass: configService.get<string>('DIGITEKISI_PASSWORD'),
        },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
