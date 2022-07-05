import { Injectable, Logger } from '@nestjs/common';
import { EncryptService } from '../../../core/shared/encrypt/service/encrypt.service';
import { PrismaService } from '../../../core/config/database/service/prisma.service';
import CustomerRepository from '../repository/customer.repository';
import { CustomerFactory } from '../entity/customer.factory';
import { CustomerEntity } from '../entity/customer.entity';
import { CreateCustomerDto } from '../dto/create-customer.dto';

@Injectable()
export class CustomerService {
  private readonly logger = new Logger(CustomerService.name);

  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly encryptService: EncryptService,
    private readonly prisma: PrismaService,
  ) {}

  async create(customerDto: CreateCustomerDto): Promise<CustomerEntity> {
    const { password } = customerDto;

    const passwordHashed = await this.encryptService.encrypt(password);

    const customer: CustomerEntity = CustomerFactory.entityByCreateDTO({
      ...customerDto,
      password: passwordHashed,
    });

    await this.customerRepository.create(customer);
    this.logger.log(`Cliente criado: ${JSON.stringify(customer)}`);

    return customer;
  }
}
