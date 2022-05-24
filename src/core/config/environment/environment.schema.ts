import { plainToClass, ClassTransformOptions } from 'class-transformer';
import {
  IsEnum,
  IsNumber,
  IsIP,
  ValidatorOptions,
  validateSync,
} from 'class-validator';
import EnvironmentOptions from './environment.enum';

class EnvironmentSchema {
  @IsEnum(EnvironmentOptions)
  NODE_ENV: string;

  @IsIP()
  HOST: string;

  @IsNumber()
  PORT: number;

  public static validate(config: Record<string, unknown>): EnvironmentSchema {
    const validatedConfig = EnvironmentSchema.getPlainToClass(config);
    const validatorOptions: ValidatorOptions = { skipMissingProperties: false };
    const errors = validateSync(validatedConfig, validatorOptions);

    if (errors.length > 0) {
      throw new Error(errors.toString());
    }

    return validatedConfig;
  }

  private static getPlainToClass(
    config: Record<string, unknown>,
  ): EnvironmentSchema {
    const classTransformOptions: ClassTransformOptions = {
      enableImplicitConversion: true,
    };

    return plainToClass(EnvironmentSchema, config, classTransformOptions);
  }
}

export default EnvironmentSchema;
