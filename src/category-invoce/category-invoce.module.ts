import { Module } from '@nestjs/common';
import { CategoryInvoceService } from './category-invoce.service';
import { CategoryInvoceController } from './category-invoce.controller';

@Module({
  controllers: [CategoryInvoceController],
  providers: [CategoryInvoceService],
})
export class CategoryInvoceModule {}
