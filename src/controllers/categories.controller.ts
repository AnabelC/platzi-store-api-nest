import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('/filter')
  getCategoryFilter(): string {
    return 'Yo soy un Filter';
  }

  @Get('')
  getAll(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `Categories: limit => ${limit} y offset => ${offset}`,
    };
  }

  @Get('/:categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ) {
    return `Category: ${categoryId} y Product ${productId}`;
  }

  @Get('/:categoryId')
  getOne(@Param('categoryId') categoryId: string): string {
    return `Category ${categoryId}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Accion para crear Category',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: 'Eliminar Category',
      id,
    };
  }
}
