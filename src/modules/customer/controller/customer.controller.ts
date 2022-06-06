import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { CustomerService } from '../service/customer.service';
import { CustomerEntity } from '../entity/customer.entity';

@Controller({
  path: 'customers',
  version: '1',
})
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  findAll(): string {
    return '';
  }

  @Post()
  async create(@Body() customer: CreateCustomerDto): Promise<CustomerEntity> {
    return this.customerService.create(customer);
  }
}
