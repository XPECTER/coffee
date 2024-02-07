import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  async create(@Body() menu: string) {
    this.orderService.createMenu(menu);
  }

  @Get()
  async getMenu(): Promise<string[]> {
    return this.orderService.getMenu();
  }
}
