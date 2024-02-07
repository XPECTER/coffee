import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  private readonly menu: string[] = [];

  getMenu() {
    return this.menu;
  }

  createMenu(menu: string) {
    this.menu.push(menu);
  }
}
