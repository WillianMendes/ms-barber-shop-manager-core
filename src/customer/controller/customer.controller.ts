import { Body, Controller, Post, Get } from '@nestjs/common';
import CreateCustomerDto from '../dto/create-customer.dto';

@Controller({
  path: 'customer',
  version: '1',
})
export class CustomerController {
  @Get()
  findAll(): string {
    return '';
  }

  @Post()
  create(@Body() customer: CreateCustomerDto): string {
    return 'This action adds a new customer';
  }
}
