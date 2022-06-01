import { Type } from 'class-transformer';
import {
  IsDate,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxDate,
  MinLength,
} from 'class-validator';
import { IsCPF } from '../utils/cpf.validation';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  readonly firstname: string;

  @IsNotEmpty()
  @IsString()
  readonly lastname: string;

  @IsNotEmpty()
  @IsCPF()
  readonly cpf: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsDateString()
  readonly birthdate: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  readonly password: string;
}
