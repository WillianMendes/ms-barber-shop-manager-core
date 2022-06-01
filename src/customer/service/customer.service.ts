import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../dto/create-customer.dto';

@Injectable()
export class CustomerService {
  async create(customer: CreateCustomerDto): Promise<CreateCustomerDto> {
    return customer;
  }
}
