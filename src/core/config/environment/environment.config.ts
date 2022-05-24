import { ConfigModuleOptions } from '@nestjs/config';
import EnvironmentSchema from './environment.schema';

class EnvironmentConfig {
  public static handle(): ConfigModuleOptions {
    return {
      cache: true,
      expandVariables: true,
      isGlobal: true,
      validate: EnvironmentSchema.validate,
    };
  }
}

export default EnvironmentConfig;
