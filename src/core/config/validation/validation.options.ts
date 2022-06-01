import { HttpStatus, ValidationPipeOptions } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import EnvironmentOptions from '../environment/environment.enum';

class ValidationOptions {
  constructor(private readonly configService: ConfigService) {}

  public handle(): ValidationPipeOptions {
    const enableDebugMessages =
      this.configService.get('NODE_ENV') !== EnvironmentOptions.Production;

    return {
      disableErrorMessages: false,
      dismissDefaultMessages: false,
      enableDebugMessages: enableDebugMessages,
      forbidNonWhitelisted: true,
      stopAtFirstError: false,
      errorHttpStatusCode: HttpStatus.BAD_REQUEST,
      transform: true,
      whitelist: true,
    };
  }
}

export default ValidationOptions;
