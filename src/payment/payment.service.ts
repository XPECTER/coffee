import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {
  private point = new Map<string, number>();

  chargePoint(user: string, point: number) {
    point[user] += point;
  }
}
