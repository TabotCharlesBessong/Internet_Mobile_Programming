import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsNotEmpty,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class CreateDriverDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @ApiProperty({
    required: true,
    example: 'tekisi man yimnai',
  })
  tekisiName: string;

  @IsString()
  @IsNotEmpty()
  @Length(9, 9)
  @ApiProperty({
    required: true,
    example: '673675748',
  })
  telephone: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 6)
  @IsAlphanumeric()
  @ApiProperty({
    required: true,
    example: '45ch53',
  })
  licenceNum: string;
}
