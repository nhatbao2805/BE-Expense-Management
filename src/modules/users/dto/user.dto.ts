import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UserDto {
  @ApiProperty({ example: 'nhatbao2850' })
  name: string;

  @ApiProperty({ example: 'nhatbao2850@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'Nhatbao123@' })
  @MinLength(6)
  @IsNotEmpty()
  password: string;

  id: string;
}
