import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ValidationConfig from './core/config/validation/validation.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(ValidationConfig.handle());

  const config = app.get(ConfigService);
  const port = config.get('PORT');
  const host = config.get('HOST');

  await app.listen(port, host, () => {
    Logger.debug(`Application is running on: ${host}:${port}`);
  });
}

bootstrap();
