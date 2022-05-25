import { Body, Controller, Post } from '@nestjs/common';
import CreateCustomerDto from '../dto/create-customer.dto';

@Controller({
  path: 'customer',
  version: '1',
})
export class CustomerController {
  @Post()
  create(@Body() customer: CreateCustomerDto): string {
    return 'This action adds a new customer';
  }
}
