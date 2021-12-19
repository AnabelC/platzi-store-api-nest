import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('/filter')
  getProductFilter(): string {
    return 'Yo soy un Filter';
  }
  // @Get('products')
  // getProducts(@Query() params: any) {
  //   const { limit, offset } = params;
  //   return `products: limit => ${limit} y offset =${offset}`;
  // }

  @Get('')
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products: limit => ${limit}, offset => ${offset} y brand => ${brand}`,
    };
  }

  // @Get('/:productId')
  // getOne(@Param() params: any): string {
  //   return `product ${params.productId}`;
  // }

  @Get('/:productId')
  getOne(@Param('productId') productId: string): string {
    return `product ${productId}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion para crear',
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
      message: 'Eliminar producto',
      id,
    };
  }
}
