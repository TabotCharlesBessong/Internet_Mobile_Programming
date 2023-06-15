import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class SignupStartDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    example: 'johndoe@gmail.com',
  })
  email: string;

  @IsNotEmpty()
  @MinLength(7)
  @ApiProperty({
    type: String,
    required: true,
    minimum: 7,
    example: 'johndoepassword',
  })
  password: string;
}

export default SignupStartDto;
