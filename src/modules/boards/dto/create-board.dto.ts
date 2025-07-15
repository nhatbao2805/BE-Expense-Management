import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class CreateBoardDto {
  @ApiProperty({ example: 'BoardTest1' })
  @IsNotEmpty()
  name: string;
}
