import { Controller, Post, Body, Query, UseGuards, Get } from '@nestjs/common';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@ApiTags('Driver')
@Controller('api/driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Post('become')
  becomeDriver(
    @Body() driverInfo: CreateDriverDto,
    @Query('userId') userId: string,
  ) {
    return this.driverService.create(driverInfo, userId);
  }

  @Get('all')
  getAllDrivers() {
    return this.driverService.getAllDrivers();
  }
}
