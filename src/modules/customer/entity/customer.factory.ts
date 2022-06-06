import { EmailEntity } from './email.entity';
import { CustomerEntity } from './customer.entity';
import { CreateCustomerDto } from '../dto/create-customer.dto';

export class CustomerFactory {
  static entityByCreateDTO(customer: CreateCustomerDto): CustomerEntity {
    const { firstname, lastname, cpf, email, birthdate, password } = customer;

    const emailEntity: EmailEntity = new EmailEntity(email);

    return new CustomerEntity(
      firstname,
      lastname,
      cpf,
      emailEntity,
      birthdate,
      password,
    );
  }
}
