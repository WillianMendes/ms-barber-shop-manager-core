import { Prisma, Customer } from '@prisma/client';
import { PrismaService } from '../../../core/config/database/service/prisma.service';
import { CustomerInterface } from './customer.interface';
import { CustomerEntity } from '../entity/customer.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class CustomerRepository implements CustomerInterface {
  constructor(private readonly prisma: PrismaService) {}

  async create(customer: CustomerEntity): Promise<CustomerEntity> {
    const customerToSaved = {
      ...customer,
      birthdate: new Date(customer.birthdate),
      email: {
        create: {
          address: customer.email.address,
          isConfirmed: customer.email.isConfirmed,
        },
      },
    };

    const data = { data: customerToSaved };

    const result = await this.prisma.customer.create(data);
    console.log(result);

    return customer;
  }

  delete(id: number): Promise<boolean> {
    return Promise.resolve(false);
  }

  find(id: number): Promise<CustomerEntity> {
    return Promise.resolve(undefined);
  }

  findAll(): Promise<CustomerEntity[]> {
    return Promise.resolve([]);
  }

  findByCpf(cpf: string): Promise<CustomerEntity> {
    return Promise.resolve(undefined);
  }

  findByEmail(email: string): Promise<CustomerEntity> {
    return Promise.resolve(undefined);
  }
}
