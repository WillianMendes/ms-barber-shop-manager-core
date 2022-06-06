import { EmailEntity } from './email.entity';

export class CustomerEntity {
  private firstname: string;
  private lastname: string;
  private cpf: string;
  private email: EmailEntity;
  private birthdate: string;
  private password: string;

  constructor(
    firstname: string,
    lastname: string,
    cpf: string,
    email: EmailEntity,
    birthdate: string,
    password: string,
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.cpf = cpf;
    this.email = email;
    this.birthdate = birthdate;
    this.password = password;
  }
}
