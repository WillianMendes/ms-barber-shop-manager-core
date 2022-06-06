import { Injectable, Logger } from '@nestjs/common';
import { EncryptService } from '../../../core/encrypt/service/encrypt.service';
import { CustomerEntity } from '../entity/customer.entity';
import { CustomerFactory } from '../entity/customer.factory';
import { CreateCustomerDto } from '../dto/create-customer.dto';

@Injectable()
export class CustomerService {
  private readonly logger = new Logger(CustomerService.name);

  constructor(private readonly encryptService: EncryptService) {}

  async create(customerDto: CreateCustomerDto): Promise<CustomerEntity> {
    const { password } = customerDto;

    const passwordHashed = await this.encryptService.encrypt(password);

    const customer: CustomerEntity = CustomerFactory.entityByCreateDTO({
      ...customerDto,
      password: passwordHashed,
    });

    console.log(customer);

    return customer;
  }
}
