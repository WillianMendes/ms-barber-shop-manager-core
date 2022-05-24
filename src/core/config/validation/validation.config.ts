import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import ValidationOptions from './validation.options';

class ValidationConfig {
  public static handle(): ValidationPipe {
    const config = new ConfigService();
    const options = new ValidationOptions(config).handle();
    return new ValidationPipe(options);
  }
}

export default ValidationConfig;
