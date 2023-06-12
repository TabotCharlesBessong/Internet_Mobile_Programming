import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private configService: ConfigService,
  ) {}

  async sendUserConfirmation(confirmationDetails: {
    email: string;
    message: string;
  }) {
    return await this.mailerService.sendMail({
      to: confirmationDetails.email,
      from: this.configService.get<string>('DIGITEKISI_EMAIL'),
      subject: 'Welcome to DIGITEKISI! Confirm your Email',
      html: `
        ${confirmationDetails.message}
      `,
    });
  }
}
