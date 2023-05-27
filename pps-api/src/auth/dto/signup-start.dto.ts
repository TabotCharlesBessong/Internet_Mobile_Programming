import { ApiProperty } from '@nestjs/swagger';

export class SignupStartDto {
  @ApiProperty({
    type: String,
    required: true,
  })
  email: string;

  @ApiProperty({
    type: String,
    required: true,
    minimum: 7,
  })
  password: string;
}
