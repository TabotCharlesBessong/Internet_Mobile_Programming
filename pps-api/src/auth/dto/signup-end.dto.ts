import { ApiProperty } from '@nestjs/swagger';

export class SignupEndDto {
  @ApiProperty({
    type: Number,
    required: true,
    minimum: 6,
    maximum: 6,
  })
  verificationCode: number;
}
