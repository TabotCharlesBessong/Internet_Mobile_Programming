import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class SignupEndDto {
  @IsNotEmpty()
  @Length(6, 6)
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    example: '134534',
  })
  verificationCode: string;
}

export default SignupEndDto;
