import { PartialType } from '@nestjs/swagger';
import { SignupStartDto } from './signup-start.dto';

export class LoginDto extends PartialType(SignupStartDto) {}
