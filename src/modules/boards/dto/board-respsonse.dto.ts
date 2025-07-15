import { Expose, Type } from 'class-transformer';

export class ListResponseDto {
  @Expose()
  id: string;

  @Expose()
  name: string;
}

export class BoardResponseDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  @Type(() => ListResponseDto)
  lists: ListResponseDto[];
}
