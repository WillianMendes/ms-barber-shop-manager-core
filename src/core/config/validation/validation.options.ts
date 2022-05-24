import { HttpStatus, ValidationPipeOptions } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import EnvironmentOptions from '../environment/environment.enum';

class ValidationOptions {
  constructor(private readonly configService: ConfigService) {}

  public handle(): ValidationPipeOptions {
    const enableDebugMessages =
      this.configService.get('NODE_ENV') === EnvironmentOptions.Production
        ? false
        : true;

    return {
      always: true,
      disableErrorMessages: false,
      dismissDefaultMessages: false,
      enableDebugMessages: enableDebugMessages,
      stopAtFirstError: false,
      errorHttpStatusCode: HttpStatus.BAD_REQUEST,
      skipMissingProperties: true,
      skipNullProperties: true,
      skipUndefinedProperties: true,
      transform: true,
      whitelist: true,
    };
  }
}

export default ValidationOptions;
