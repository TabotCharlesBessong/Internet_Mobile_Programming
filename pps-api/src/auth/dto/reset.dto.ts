import { ApiProperty } from '@nestjs/swagger';

export class ResetPasswordDto {
  @ApiProperty({
    type: String,
    required: true,
    minimum: 6,
    maximum: 6,
  })
  verificationCode: string;

  @ApiProperty({
    type: String,
    required: true,
    minimum: 7,
  })
  newPassword: string;

  @ApiProperty({
    type: String,
    required: true,
    minimum: 7,
  })
  confirmPassword: string;
}
