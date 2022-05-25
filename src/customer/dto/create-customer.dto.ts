import { Expose, Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  MaxDate,
  Validate,
} from 'class-validator';
import CpfValidation from 'src/utils/cpf.validation';

class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  @Expose({ name: 'first_name' })
  private readonly firstName: string;

  @IsNotEmpty()
  @IsString()
  @Expose({ name: 'last_name' })
  private readonly lastName: string;

  @IsNotEmpty()
  @Validate(CpfValidation)
  @Expose({ name: 'cpf' })
  private readonly cpf: string;

  @IsNotEmpty()
  @IsEmail()
  @Expose({ name: 'email' })
  private readonly email: string;

  @IsNotEmpty()
  @MaxDate(new Date())
  @Type(() => Date)
  @Expose({ name: 'birthdate' })
  private readonly birthdate: string;

  @IsNotEmpty()
  @IsString()
  @Expose({ name: 'password' })
  private readonly password: string;
}

export default CreateCustomerDto;
