import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';

import { Response } from 'express';

import { ProductsService } from './../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
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
    // return {
    //   message: `products: limit => ${limit}, offset => ${offset} y brand => ${brand}`,
    // };
    return this.productsService.findAll();
  }

  // @Get('/:productId')
  // getOne(@Param() params: any): string {
  //   return `product ${params.productId}`;
  // }

  @Get('/:productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId') productId: string) {
    // Forma de express
    // response.status(200).send({
    //   message: `product ${productId}`,
    // });
    return this.productsService.findOne(+productId);
  }

  @Post()
  create(@Body() payload: any) {
    // return {
    //   message: 'accion para crear',
    //   payload,
    // };
    this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    // return {
    //   id,
    //   payload,
    // };
    this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.productsService.remove(+id);
  }
}
