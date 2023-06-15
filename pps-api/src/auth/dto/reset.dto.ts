import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, MinLength } from 'class-validator';

export class ResetPasswordDto {
  @IsString()
  @Length(6, 6)
  @ApiProperty({
    type: String,
    required: true,
  })
  verificationCode: string;

  @IsString()
  @MinLength(7)
  @ApiProperty({
    type: String,
    required: true,
    minimum: 7,
  })
  newPassword: string;

  @IsString()
  @MinLength(7)
  @ApiProperty({
    type: String,
    required: true,
    minimum: 7,
  })
  confirmPassword: string;
}
