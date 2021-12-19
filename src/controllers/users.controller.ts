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

@Controller('users')
export class UsersController {
  @Get('/filter')
  getUserFilter(): string {
    return 'Yo soy un Filter';
  }

  @Get('')
  getAll(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `users: limit => ${limit} y offset => ${offset}`,
    };
  }

  @Get('/:userId')
  getOne(@Param('userId') userId: string): string {
    return `User ${userId}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Accion para crear User',
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
      message: 'Eliminar user',
      id,
    };
  }
}
