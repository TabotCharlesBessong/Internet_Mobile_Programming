import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class RidesByDriverDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    required: true,
  })
  driverId: string;
}

export default RidesByDriverDto;
