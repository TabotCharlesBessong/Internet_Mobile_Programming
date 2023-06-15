import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class RidesByPassendgerIdDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    required: true,
  })
  passengerId: string;
}

export default RidesByPassendgerIdDto;
