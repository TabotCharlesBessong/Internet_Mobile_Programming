import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class UpdateCredentialsDto {
  @IsString()
  @IsEmail()
  @ApiProperty({
    example: 'email.com',
  })
  email: string;

  @IsString()
  @MinLength(7)
  @ApiProperty({
    example: 'mypassword',
  })
  password: string;
}

export default UpdateCredentialsDto;
