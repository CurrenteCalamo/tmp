import { Controller } from '@nestjs/common';
import { OrderService } from './order.service';
import {
  Body,
  Get,
  Post,
  Query,
} from '@nestjs/common';
import { OrderDto } from './dto/order.dto';

@Controller('oder')
export class OrderController {
  constructor(private orderService: OrderService) { }

  @Get('getAll')
  getAll(@Query('id') id: string, @Query('date') date: string) {
    return this.orderService.getAll(id, date);
  }

  @Get()
  getOne(@Query('id') id: string) {
    return this.orderService.getOne(id);
  }



  @Post('create')
  create(@Body() dto: OrderDto) {
    return this.orderService.create(dto);
  }

  @Post('dispatch')
  dispatch(@Query('id') id: string, @Query('dishId') dishId: string) {
    return this.orderService.dispatch(id, dishId);
  }
  @Get('delete')
  delete(@Query('id') id: number) {
    this.orderService.delete(id);
  }
}
