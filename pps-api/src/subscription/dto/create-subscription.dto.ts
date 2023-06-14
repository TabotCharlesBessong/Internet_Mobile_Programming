import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { SubscriptionMode } from '@prisma/client';

export class CreateSubscriptionDto {
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: 'YEARLY',
  })
  subType: SubscriptionMode;

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    required: true,
    example: 'uuid',
  })
  driverId: string;
}
