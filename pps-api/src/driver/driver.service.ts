import { Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { PrismaService } from 'src/prisma.service';
import * as uuid from 'uuid';

@Injectable()
export class DriverService {
  constructor(private prisma: PrismaService) {}

  async create(driverInfo: CreateDriverDto, userId: string) {
    if (!Boolean(userId)) {
      return {
        ok: false,
        error: 'userId is necessary!',
      };
    }
    const userExists = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (!userExists) {
      return {
        ok: false,
        error: 'No user exists with that ID',
      };
    }
    if (userExists.isDriver) {
      return {
        ok: false,
        error: 'You are already a driver!',
      };
    }
    const createNewDriver = await this.prisma.driver.create({
      data: {
        id: uuid.v4(),
        userId: userId,
        tekisiName: driverInfo.tekisiName,
        licenceNum: driverInfo.licenceNum,
        telephone: driverInfo.telephone,
      },
    });
    if (createNewDriver) {
      const updateUserDriverStatus = await this.prisma.user.update({
        data: {
          isDriver: true,
        },
        where: {
          id: userId,
        },
      });
      if (updateUserDriverStatus) {
        void 0;
      }
      return {
        ok: true,
        message: 'You have successfully become a driver!',
      };
    }
    return {
      ok: false,
      error: 'Could not become a driver at this time!',
    };
  }

  async getAllDrivers() {
    return {
      ok: true,
      message: 'Got all drivers!',
      payload: await this.prisma.driver.findMany(),
    };
  }
}
