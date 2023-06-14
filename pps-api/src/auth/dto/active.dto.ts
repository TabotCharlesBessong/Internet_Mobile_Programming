import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class ActiveDto {
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    required: true,
  })
  userId: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum({ active: 'ACTIVE', notActive: 'NOT ACTIVE' })
  @ApiProperty({
    required: true,
  })
  activeStatus: 'ACTIVE' | 'NOT ACTIVE';
}

export default ActiveDto;
