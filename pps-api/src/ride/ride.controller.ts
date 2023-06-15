import { RidesByPassendgerIdDto } from './dto/user-rides.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Put,
  UseGuards,
} from '@nestjs/common';
import { RideService } from './ride.service';
import { CreateRideDto } from './dto/create-ride.dto';
import CancelRideDto from './dto/cancel-ride.dto';
import RideCompletedDto from './dto/ride-completed.dto';
import RidesByDriverDto from './dto/driver-ride.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiTags('Rides')
@Controller('api/rides')
export class RideController {
  constructor(private readonly rideService: RideService) {}

  @Post('new')
  create(
    @Body() newRideInfo: CreateRideDto,
    @Query() query: { passengerId: string; driverId: string },
  ) {
    return this.rideService.bookRide(
      newRideInfo,
      query.passengerId,
      query.driverId,
    );
  }

  @Put('cancel')
  cancelRide(@Query() query: CancelRideDto) {
    return this.rideService.cancelRide(query);
  }

  @Put('completed')
  completeRide(@Query() query: RideCompletedDto) {
    return this.rideService.onRideCompleted(query);
  }

  @Get('passenger/all')
  getUserRideHistory(@Query() query: RidesByPassendgerIdDto) {
    return this.rideService.getUserRidesForUser(query);
  }

  @Get('driver/all')
  getDriverRideHistory(@Query() query: RidesByDriverDto) {
    return this.rideService.getUserRidesForDriver(query);
  }

  @Get('rides/all')
  getRides() {
    return this.rideService.getAllRides();
  }
}
