import { Controller } from '@nestjs/common';
import { CategoryInvoceService } from './category-invoce.service';

@Controller('category-invoce')
export class CategoryInvoceController {
  constructor(private readonly categoryInvoceService: CategoryInvoceService) {}
}
