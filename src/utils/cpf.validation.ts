import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'CpfValidation', async: true })
class CpfValidation implements ValidatorConstraintInterface {
  validate(cpf: string, args: ValidationArguments): boolean {
    if (
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999'
    ) {
      return false;
    }

    const cpfArray: string[] = cpf.split('');
    let sum = 0;
    let remainder = 0;

    for (let i = 1; i <= 9; i++) {
      sum = sum + parseInt(cpfArray[i - 1]) * (11 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder == 10 || remainder == 11) remainder = 0;
    if (remainder != parseInt(cpfArray[9])) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum = sum + parseInt(cpfArray[i - 1]) * (12 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpfArray[10])) return false;

    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return 'CPF is invalid!';
  }
}

export default CpfValidation;
