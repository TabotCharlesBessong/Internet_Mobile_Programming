import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CancelRideDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
  })
  canceller: 'user' | 'driver';

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    required: true,
  })
  rideId: string;
}

export default CancelRideDto;
