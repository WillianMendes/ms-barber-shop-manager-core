import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import VersioningOptionsCustom from './core/config/versioning/versioning.options';
import ValidationConfig from './core/config/validation/validation.config';
import { AppModule } from './app.module';
import { PrismaService } from './core/config/database/service/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning(VersioningOptionsCustom.handle());
  app.useGlobalPipes(ValidationConfig.handle());

  const config = app.get(ConfigService);
  const port = config.get('PORT');
  const host = config.get('HOST');

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  await app.listen(port, host, () => {
    Logger.debug(`Application is running on: ${host}:${port}`);
  });
}

bootstrap().then();
