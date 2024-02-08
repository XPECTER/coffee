import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Post()
  async chargePoint(@Body() point: number) {
    const user: string = 'kong';
    this.paymentService.chargePoint(user, point);
  }
}
