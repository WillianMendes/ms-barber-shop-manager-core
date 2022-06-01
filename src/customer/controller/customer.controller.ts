import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateCustomerDto } from '../dto/create-customer.dto';

@Controller({
  path: 'customers',
  version: '1',
})
export class CustomerController {
  @Get()
  findAll(): string {
    return '';
  }

  @Post()
  async create(
    @Body() customer: CreateCustomerDto,
  ): Promise<CreateCustomerDto> {
    return customer;
  }
}
