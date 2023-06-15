import { Controller, Get, Post, UseGuards, Query, Put } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import UnsubscribeDto from './dto/unsubscribe.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiTags('Subscription')
@Controller('api/subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Post('new')
  subscribeToBundle(@Query() query: CreateSubscriptionDto) {
    return this.subscriptionService.subscribeToBundle(query);
  }

  @Put('cancel')
  cancelSubscription(@Query() query: UnsubscribeDto) {
    return this.subscriptionService.unsubscribeFromBundle(query);
  }

  @Get('info')
  getSubInfo(@Query() query: UnsubscribeDto) {
    return this.subscriptionService.getSubscriptionInfo(query);
  }
}
