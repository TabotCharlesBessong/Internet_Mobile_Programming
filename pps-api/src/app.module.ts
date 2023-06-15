import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { SubscriptionModule } from './subscription/subscription.module';
import { DriverModule } from './driver/driver.module';
import { RideModule } from './ride/ride.module';

@Module({
  imports: [
    AuthModule,
    MailModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: '.env',
    }),
    SubscriptionModule,
    DriverModule,
    RideModule,
  ],
})
export class AppModule {}
