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

@Controller('brands')
export class BrandsController {
  @Get('/filter')
  getBrandFilter(): string {
    return 'Yo soy un Filter';
  }

  @Get('')
  getAll(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `brands: limit => ${limit} y offset => ${offset}`,
    };
  }

  @Get('/:brandId')
  getOne(@Param('brandId') brandId: string): string {
    return `Brand ${brandId}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Accion para crear Brand',
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
      message: 'Eliminar brand',
      id,
    };
  }
}
