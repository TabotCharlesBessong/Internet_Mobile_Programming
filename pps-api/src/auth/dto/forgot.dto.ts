import { ApiProperty, PartialType } from '@nestjs/swagger';
import { SignupStartDto } from './signup-start.dto';

export class ForgotPasswordDto extends PartialType(SignupStartDto) {
  @ApiProperty({
    required: true,
    type: String,
  })
  email: string;
}
