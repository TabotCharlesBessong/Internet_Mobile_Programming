import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class UnsubscribeDto {
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    required: true,
    example: 'driver_id(uuid)',
  })
  driverId: string;
}

export default UnsubscribeDto;
