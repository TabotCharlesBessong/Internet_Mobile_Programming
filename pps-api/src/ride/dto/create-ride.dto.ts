import { ApiProperty } from '@nestjs/swagger';
import { RideStatus } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
import { IsDecimal, IsNotEmpty, IsString } from 'class-validator';

export class CreateRideDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    required: true,
    type: String,
  })
  origin: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    required: true,
    type: String,
  })
  destination: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    required: true,
    type: String,
  })
  rideStatus: RideStatus;

  @IsNotEmpty()
  @IsDecimal()
  @ApiProperty({
    required: true,
    type: String,
  })
  distance: string;
}
