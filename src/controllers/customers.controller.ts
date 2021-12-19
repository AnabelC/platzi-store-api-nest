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

@Controller('customers')
export class CustomersController {
  @Get('/filter')
  getCustomerFilter(): string {
    return 'Yo soy un Filter';
  }

  @Get('')
  getAll(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `customers: limit => ${limit} y offset => ${offset}`,
    };
  }

  @Get('/:customerId')
  getOne(@Param('customerId') customerId: string): string {
    return `Customer ${customerId}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Accion para crear Customer',
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
      message: 'Eliminar customer',
      id,
    };
  }
}
