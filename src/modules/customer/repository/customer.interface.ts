import { CustomerEntity } from '../entity/customer.entity';

export interface CustomerInterface {
  findAll(): Promise<CustomerEntity[]>;
  find(id: number): Promise<CustomerEntity>;
  findByCpf(cpf: string): Promise<CustomerEntity>;
  findByEmail(email: string): Promise<CustomerEntity>;
  create(customer: CustomerEntity): Promise<CustomerEntity>;
  delete(id: number): Promise<boolean>;
}
