import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class RideCompletedDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    required: true,
  })
  rideId: string;
}

export default RideCompletedDto;
