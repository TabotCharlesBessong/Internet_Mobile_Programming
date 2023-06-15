import { Injectable } from '@nestjs/common';
import { CreateRideDto } from './dto/create-ride.dto';
import CancelRideDto from './dto/cancel-ride.dto';
import { PrismaService } from 'src/prisma.service';
import * as uuid from 'uuid';
import RideCompletedDto from './dto/ride-completed.dto';
import RidesByPassendgerIdDto from './dto/user-rides.dto';
import RidesByDriverDto from './dto/driver-ride.dto';

@Injectable()
export class RideService {
  constructor(private prisma: PrismaService) {}
  async bookRide(
    createRide: CreateRideDto,
    passengerId: string,
    driverId: string,
  ) {
    const userExists = await this.prisma.user.findUnique({
      where: { id: passengerId },
    });
    if (!userExists) {
      return {
        ok: false,
        message: 'No passenger with that id exists',
      };
    }
    const driverExists = await this.prisma.driver.findUnique({
      where: { id: driverId },
    });
    if (!driverExists) {
      return {
        ok: false,
        message: 'No such drive exists!',
      };
    }
    const createNewRide = await this.prisma.ride.create({
      data: {
        id: uuid.v4(),
        driverId: driverId,
        passengerId: passengerId,
        date: new Date(),
        cost: parseFloat(createRide.distance) * 100,
        distance: parseFloat(createRide.distance),
        status: 'IN_TRANSIT',
        origin: createRide.origin,
        destination: createRide.destination,
      },
    });
    if (!createNewRide) {
      return {
        ok: false,
        error: 'Could not successfully create new ride!',
      };
    }
    return {
      ok: true,
      message: 'Ride started!',
    };
  }

  async cancelRide(cancelInfo: CancelRideDto) {
    const cancelCurrentRide = await this.prisma.ride.update({
      data: {
        status: 'CANCELLED',
      },
      where: {
        id: cancelInfo.rideId,
      },
    });
    if (!cancelCurrentRide) {
      return {
        ok: false,
        error: 'Cancel ride',
      };
    }
    return {
      ok: true,
      message: 'Ride cancelled successfully. NO refund available',
    };
  }

  async onRideCompleted(completedRide: RideCompletedDto) {
    const rideCompletion = await this.prisma.ride.update({
      data: {
        status: 'COMPLETED',
      },
      where: {
        id: completedRide.rideId,
      },
    });
    if (!rideCompletion) {
      return {
        ok: false,
        error: 'Could not complete ride successfully',
      };
    }
    return {
      ok: true,
      message: 'Ride completed successfully!',
    };
  }

  async getUserRidesForUser(passenger: RidesByPassendgerIdDto) {
    const passengerRideInfo = await this.prisma.ride.findMany({
      where: {
        passengerId: passenger.passengerId,
      },
    });
    if (!passengerRideInfo) {
      return {
        ok: false,
        error: 'Could not fetch ride information',
      };
    }
    return {
      ok: true,
      message: 'Loaded passenger rides succesfully',
      payload: passengerRideInfo,
    };
  }

  async getUserRidesForDriver(driver: RidesByDriverDto) {
    const driverRideInfo = await this.prisma.ride.findMany({
      where: {
        driverId: driver.driverId,
      },
    });
    if (!driverRideInfo) {
      return {
        ok: false,
        error: 'Could not fetch driver ride information!',
      };
    }
    return {
      ok: true,
      message: 'Loaded driver rides succesfully',
      payload: driverRideInfo,
    };
  }

  async getAllRides() {
    return {
      ok: true,
      message: 'Loaded all rides',
      payload: await this.prisma.ride.findMany(),
    };
  }
}
