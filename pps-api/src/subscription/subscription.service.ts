import { Injectable } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { PrismaService } from 'src/prisma.service';
import { SubscriptionAmount, SubscriptionMode } from '@prisma/client';
import * as uuid from 'uuid';
import UnsubscribeDto from './dto/unsubscribe.dto';

@Injectable()
export class SubscriptionService {
  constructor(private prisma: PrismaService) {}

  async subscribeToBundle(subscriber: CreateSubscriptionDto) {
    const subBundle =
      SubscriptionAmount[subscriber.subType as keyof typeof SubscriptionAmount];
    if (!subBundle) {
      return {
        ok: false,
        message: 'Make sure to enter the correct bundle type',
      };
    }
    const driverExists = await this.prisma.driver.findUnique({
      where: {
        id: subscriber.driverId,
      },
    });
    if (!driverExists) {
      return {
        ok: false,
        message:
          'You must be a driver to subscribe. Make sure you entered correct ID',
      };
    }
    const createOrUpdateSubscription = await this.prisma.subscription.upsert({
      where: {
        driverId: subscriber.driverId,
      },
      create: {
        id: uuid.v4(),
        driverId: subscriber.driverId,
        type: subscriber.subType,
        amount: subBundle,
        subscriptionDate: new Date(),
        expirationDate: this.getExpirationDate(subscriber.subType),
      },
      update: {
        type: subscriber.subType,
        amount: subBundle,
        subscriptionDate: new Date(),
        expirationDate: this.getExpirationDate(subscriber.subType),
      },
    });
    if (!createOrUpdateSubscription) {
      return {
        ok: false,
        error: 'Could not update subscription',
      };
    }
    return {
      ok: true,
      message: 'Subscribed to bundle successfully!',
    };
  }

  async unsubscribeFromBundle(subscriber: UnsubscribeDto) {
    const subscriptionExists = await this.prisma.subscription.findUnique({
      where: {
        driverId: subscriber.driverId,
      },
    });
    if (!subscriptionExists) {
      return {
        ok: false,
        error: 'NO subscription for this driver exists',
      };
    }
    const deleteSubscription = await this.prisma.subscription.delete({
      where: {
        driverId: subscriber.driverId,
      },
    });
    if (deleteSubscription) {
      return {
        ok: true,
        message: 'Unsubscribed successfully',
      };
    }
    return {
      ok: false,
      error: 'Could not delete subscription',
    };
  }

  async getSubscriptionInfo(subscriber: UnsubscribeDto) {
    const subscriberExists = await this.prisma.subscription.findUnique({
      where: {
        driverId: subscriber.driverId,
      },
    });
    if (!subscriberExists) {
      return {
        ok: false,
        error: 'Could not find subscriber',
      };
    }
    return {
      ok: true,
      message: 'subscription Info',
      payload: subscriberExists,
    };
  }

  getExpirationDate(subType: SubscriptionMode) {
    const expirationDate: Date = new Date();
    switch (subType) {
      case 'MONTHLY':
        expirationDate.setDate(expirationDate.getDate() + 30);
        break;
      case 'QUARTERLY':
        expirationDate.setDate(expirationDate.getDate() + 90);
        break;
      case 'BI_YEARLY':
        expirationDate.setDate(expirationDate.getDate() + 180);
        break;
      case 'YEARLY':
        expirationDate.setDate(expirationDate.getDate() + 360);
        break;
      default:
        break;
    }
    return expirationDate;
  }
}
