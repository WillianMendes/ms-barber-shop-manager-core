import { EmailEntity } from './email.entity';

export class CustomerEntity {
  public firstname: string;
  public lastname: string;
  public cpf: string;
  public email: EmailEntity;
  public birthdate: string;
  public password: string;

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
