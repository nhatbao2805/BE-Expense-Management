import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateInvoiceDto {
  @ApiProperty({ example: 'nhatbao2850' })
  amount: string;

  @ApiProperty({ example: 'nhatbao2850@gmail.com' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'Nhatbao123@' })
  @IsNotEmpty()
  password: string;
}
